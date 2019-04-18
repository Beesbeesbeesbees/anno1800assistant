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
    // Farmers
    this.addFactoryChain(1010278); // Fishery    
    this.addFactoryChain(1010294); // Schnapps
    this.addFactoryChain(1010315); // Knitter
    // Workers
    this.addFactoryChain(1010316); // Sausages
    this.addFactoryChain(1010291); // Bread
    this.addFactoryChain(1010281); // Soap
    this.addFactoryChain(1010292); // Beer
    this.addFactoryChain(1010360); // School
    // Artisans
    this.addFactoryChain(1010295); // Canned Food
    this.addFactoryChain(1010284); // Sewing Machines
    this.addFactoryChain(1010340); // Rum
    this.addFactoryChain(1010325); // Fur Coats
    this.addFactoryChain(1010362); // University
    // Engineers
    this.addFactoryChain(101250); // Glasses
    this.addFactoryChain(1010323); // High Wheelers
    this.addFactoryChain(1); // Electricity
    this.addFactoryChain(101252); // Coffee
    this.addFactoryChain(1010324); // Pocket Watches
    this.addFactoryChain(1010286); // Light Bulbs
    this.addFactoryChain(1010365); // Bank
    // Investors
    this.addFactoryChain(100659); // Champagne
    this.addFactoryChain(1010342); // Cigars
    this.addFactoryChain(1010364); // Club House
    this.addFactoryChain(1010341); // Chocolate
    this.addFactoryChain(1010328); // Jewelry
    this.addFactoryChain(1010326); // Gramophones
    this.addFactoryChain(1010303); // Steam Carriages
    // Jornaleros
    this.addFactoryChain(101264); // Fried Plantains
    this.addFactoryChain(1010340); // Rum
    this.addFactoryChain(101266); // Ponchos
    this.addFactoryChain(2); // Chapel
    // Obreros
    this.addFactoryChain(101271); // Tortillas
    this.addFactoryChain(101252); // Coffee
    this.addFactoryChain(3); // Boxing Arena
    this.addFactoryChain(101273); // Bowler Hats
    this.addFactoryChain(1010292); // Beer
    this.addFactoryChain(1010284); // Sewing Machines
    this.addFactoryChain(1010342); // Cigars
  }


  addFactoryChain(factoryID: number) {
    let factory = new Factory(new Factories().AllFactories.filter(f => f.ID === factoryID)[0]);
    this.Factories.push(factory);
    this.processChildFactories(factory);
  }


  processChildFactories(factory: Factory) {
    for (var i = 0; i < factory.Inputs.length; i++) {
      let childFactory = new Factories().AllFactories.filter(f => 
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