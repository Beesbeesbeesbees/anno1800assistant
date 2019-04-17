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

    let fishery = new Factory(Factories.filter(f => f.ID === 1010278)[0], 0);
    this.Factories.push(fishery);

    let sheepFarm = new Factory(Factories.filter(f => f.ID === 1010267)[0], 1)
    let knitter = new Factory(Factories.filter(f => f.ID === 1010315)[0], 0, [sheepFarm]);
    this.Factories.push(knitter);
    this.Factories.push(sheepFarm);    
  }
}