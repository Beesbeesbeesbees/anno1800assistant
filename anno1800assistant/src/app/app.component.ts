import { Component, OnInit } from '@angular/core';
import { PopulationLevelsFactory, PopulationLevel } from './data/populations';
import { Factory, Factories } from './data/factories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.reset();

    
  }

  reset() {    
    this.islands = [new Island("First Island")];    
  }

  islands: Island[]  
}


export class Island {
  Name: string
  PopulationLevels: PopulationLevel[];
  Factories: Factory[];

  constructor(name: string) {
    this.Name = name;
    this.PopulationLevels = new PopulationLevelsFactory().GetPopulationLevels();
    this.Factories = [];

    // Referencing factories by ID here for possible additional language support
    this.addFactoryChain(1010278); // Fishery    
    this.addFactoryChain(1010294); // Schnapps
    this.addFactoryChain(1010315); // Knitter
    this.addFactoryChain(1010316); // Sausages
    this.addFactoryChain(1010291); // Bread
    this.addFactoryChain(1010281); // Soap
    this.addFactoryChain(1010292); // Beer
    this.addFactoryChain(1010360); // School
  }


  addFactoryChain(factoryID: number) {
    let factory = new Factory(Factories.filter(f => f.ID === factoryID)[0]);
    this.Factories.push(factory);
    this.processChildFactories(factory);
  }


  processChildFactories(factory: Factory) {
    for (var i = 0; i < factory.Inputs.length; i++) {
      let childFactory = Factories.filter(f => 
        f.Outputs.filter(output => output.ProductID === factory.Inputs[i].ProductID).length > 0
      )[0];

      if (childFactory) {
        let newFactory = new Factory(childFactory);
        factory.ChildFactories.push(newFactory);
        newFactory.ParentFactory = factory;
        this.Factories.push(newFactory);
        this.processChildFactories(newFactory);
      }
    }
  }
}