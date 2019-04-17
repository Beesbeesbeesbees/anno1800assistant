import { Component, OnInit } from '@angular/core';
import { PopulationLevelsFactory, PopulationLevel } from './data/populations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.reset();

    this.populationLevels[0].PopulationCountFormula = () => {
      return 5;
    };
  }

  reset() {    
    this.islands = [new Island("First Island")];
  }

  islands: Island[]
  populationLevels: PopulationLevel[] = new PopulationLevelsFactory().GetPopulationLevels();
}


export class Island {
  Name: string

  constructor(name: string) {
    this.Name = name;
  }
}