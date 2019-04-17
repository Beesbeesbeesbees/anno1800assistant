import { Component, OnInit } from '@angular/core';

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

  constructor(name: string) {
    this.Name = name;
  }
}