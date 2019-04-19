import { Component, OnInit, HostListener } from '@angular/core';
import { PopulationLevelsFactory, PopulationLevel } from './data/populations';
import { Factory, Factories } from './data/factories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  islands: Island[]
  shift_key_held: boolean = false;
  ctrl_key_held: boolean = false;

  ngOnInit() {
    this.Reset();    
  }
  
  Reset() {
    this.islands = [];
    this.AddIsland();
  }  

  AddIsland() {
    this.islands.push(new Island("Island " + (this.islands.length + 1)));
  }

  @HostListener('window:keydown', ['$event'])
  keyDownEvent(event: KeyboardEvent) {        
    if (event.keyCode === 16) {
      this.shift_key_held = true;
    }

    if (event.keyCode === 17) {
      this.ctrl_key_held = true;
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyUpEvent(event: KeyboardEvent) {        
    if (event.keyCode === 16) {
      this.shift_key_held = false;
    }

    if (event.keyCode === 17) {
      this.ctrl_key_held = false;
    }
  }

  promotionCount(): number {
    return 1 * (this.ctrl_key_held ? 5 : 1) * (this.shift_key_held ? 10 : 1);
  }
}


export class Island {
  Name: string
  PopulationLevels: PopulationLevel[];
  Factories: Factory[];
  FactoryGroups: Factory[][];

  constructor(name: string) {
    this.Name = name;
    this.PopulationLevels = new PopulationLevelsFactory().GetPopulationLevels();
    this.Factories = [];
    this.FactoryGroups = [];

    // Referencing factories by ID here for possible additional language support
    // Farmers
    this.AddFactoryChain(1010278); // Fishery    
    this.AddFactoryChain(1010294); // Schnapps
    this.AddFactoryChain(1010315); // Knitter
    // Workers
    this.AddFactoryChain(1010316); // Sausages
    this.AddFactoryChain(1010291); // Bread
    this.AddFactoryChain(1010281); // Soap
    this.AddFactoryChain(1010292); // Beer
    this.AddFactoryChain(1010360); // School
    // Artisans
    this.AddFactoryChain(1010295); // Canned Food
    this.AddFactoryChain(1010284); // Sewing Machines
    this.AddFactoryChain(1010340); // Rum
    this.AddFactoryChain(1010325); // Fur Coats
    this.AddFactoryChain(1010362); // University
    // Engineers
    this.AddFactoryChain(101250); // Glasses
    this.AddFactoryChain(1010323); // High Wheelers
    this.AddFactoryChain(1); // Electricity
    this.AddFactoryChain(101252); // Coffee
    this.AddFactoryChain(1010324); // Pocket Watches
    this.AddFactoryChain(1010286); // Light Bulbs
    this.AddFactoryChain(1010365); // Bank
    // Investors
    this.AddFactoryChain(100659); // Champagne
    this.AddFactoryChain(1010342); // Cigars
    this.AddFactoryChain(1010364); // Club House
    this.AddFactoryChain(1010341); // Chocolate
    this.AddFactoryChain(1010328); // Jewelry
    this.AddFactoryChain(1010326); // Gramophones
    this.AddFactoryChain(1010303); // Steam Carriages
    // Jornaleros
    this.AddFactoryChain(101264); // Fried Plantains
    // this.addFactoryChain(1010340); // Rum
    this.AddFactoryChain(101266); // Ponchos
    this.AddFactoryChain(2); // Chapel
    // Obreros
    this.AddFactoryChain(101271); // Tortillas
    // this.addFactoryChain(101252); // Coffee
    this.AddFactoryChain(3); // Boxing Arena
    this.AddFactoryChain(101273); // Bowler Hats
    // this.addFactoryChain(1010292); // Beer
    // this.addFactoryChain(1010284); // Sewing Machines
    // this.addFactoryChain(1010342); // Cigars
  }


  AddFactoryChain(factoryID: number) {
    let factory = new Factory(new Factories().AllFactories.filter(f => f.ID === factoryID)[0]);
    this.Factories.push(factory);    
    let group = [factory];
    this.ProcessChildFactories(factory, group);
    this.FactoryGroups.push(group);
  }


  ProcessChildFactories(factory: Factory, group: Factory[]) {
    for (var i = 0; i < factory.Inputs.length; i++) {
      let childFactory = new Factories().AllFactories.filter(f => 
        f.Outputs.filter(output => output.ProductID === factory.Inputs[i].ProductID).length > 0
      )[0];

      if (childFactory) {
        let newFactory = new Factory(childFactory);
        factory.ChildFactories.push(newFactory);
        newFactory.ParentFactory = factory;
        this.Factories.push(newFactory);
        group.push(newFactory);
        this.ProcessChildFactories(newFactory, group);
      }
    }
  }  

  EnabledFactoryGroups() {
    return this.FactoryGroups.filter(f => f[0].IsInUse(this.PopulationLevels));
  }

  GetColumnLayouts() {
    let columnCount = 2;
    let columns = [];
    for (var i = 0; i < columnCount; i++) {
      columns[i] = [];
    }

    let enabledGroups = this.EnabledFactoryGroups();
    for (var i = 0; i < enabledGroups.length; i++) {
      let smallest = columns[0];

      for (var k = 0; k < columnCount; k++) {
        if (columns[k].length < smallest.length) {
          smallest = columns[k];
        }
      }

      for (var k = 0; k < enabledGroups[i].length; k++) {
        smallest.push(enabledGroups[i][k]);      
      }
    }

    return columns;
  }
}