import { Component, OnInit, HostListener, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { PopulationLevel, PopulationLevelSaveInfo, PopulationService } from './data/populations';
import { Factory, Factories, FactorySaveInfo } from './data/factories';
import { RegionService, Region } from './data/region';
import { IslandSaveInfo, Island } from './models/island';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public regionService: RegionService,
    public populationService: PopulationService
  ) { }

  regionOptions = RegionService.regionFriendlyNameMap;
  regionColorMap = RegionService.regionColorMap;
  islands: Island[]
  shift_key_held: boolean = false;
  ctrl_key_held: boolean = false;
  autosave_throttle: Date;

  ngOnInit() {
    this.autosave_throttle = new Date(new Date().getTime() + 100)
    let saveData = window.localStorage.getItem('anno1800assistantsave');
    
    if (!saveData) {
      this.Reset();
      return;
    }

    try {      
      let saveObject = JSON.parse(saveData) as SaveData;
      this.LoadData(saveObject);      
    }
    catch {
      this.Reset();
    }
  }

  ngDoCheck() {
    this.Autosave();    
  }
  
  Reset() {
    this.islands = [];
    this.AddIsland();
  }  

  AddIsland() {
    this.islands.push(new Island("Island " + (this.islands.length + 1), this.populationService));
  }

  Autosave() {
    if (this.autosave_throttle && new Date() < this.autosave_throttle) {
      return;
    }

    window.localStorage.setItem('anno1800assistantsave', JSON.stringify(this.GenerateSaveData()));
    this.autosave_throttle = new Date(new Date().getTime() + 100)
  }

  ManualSave() {  
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.GenerateSaveData()));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "anno1800AssistantSaveData.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  TriggerFileUpload() {
    let el: HTMLElement = this.loadInput.nativeElement as HTMLElement;
    el.click();
  }

  ManualLoad(event: any) {
    let self = this;
    var reader = new FileReader();

    reader.onload = function(onLoadEvent: any) {
      let data = JSON.parse(onLoadEvent.target.result) as SaveData;
      self.LoadData(data);
      self.autosave_throttle = null;
      self.Autosave();
    }
  
    reader.readAsText(event.target.files[0]);
  }

  GenerateSaveData(): SaveData {
    let save: IslandSaveInfo[] = [];
    for (var i = 0; i < this.islands.length; i++) {
      let island = this.islands[i];
      let populationLevels: PopulationLevelSaveInfo[] = [];
      let factories: FactorySaveInfo[] = [];

      for (var pop = 0; pop < island.PopulationLevels.length; pop++) {
        populationLevels.push({
          HouseCount: island.PopulationLevels[pop].HouseCount,
          ShowUnused: island.PopulationLevels[pop].ShowUnused
        });
      }

      for (var fact = 0; fact < island.Factories.length; fact++) {
        let factory = island.Factories[fact];
        factories.push({
          FactoryID: factory.ID,
          ParentFactoryID: factory.ParentFactoryOrThisRecursive.ID,
          BuiltCount: factory.BuiltCount,
          Productivity: factory.Productivity,
          Enabled: factory.Enabled,
          TradeBalance: factory.TradeBalance
        });
      }

      save.push({
        Name: island.Name,
        Region: island.Region,
        PopulationLevels: populationLevels,
        Factories: factories
      });
    }

    return { Islands: save };
  }

  LoadData(data: SaveData) {
    this.islands = [];      
    for (var i = 0; i < data.Islands.length; i++) {
      this.islands.push(new Island(data.Islands[i].Name, this.populationService, data.Islands[i]));
    }
  }

  @ViewChild('loadInput') loadInput: ElementRef;

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

  PromotionCount(): number {
    return 1 * (this.ctrl_key_held ? 5 : 1) * (this.shift_key_held ? 10 : 1);
  }

  GetTradeBalance(factoryID: number): number {
    let balance = 0;

    for (var i = 0; i < this.islands.length; i++) {
      const factory = this.islands[i].Factories.filter(f => f.ID === factoryID)[0];
      
      if (factory) {
        balance += (factory.Productivity * factory.TradeBalance / 100);
      }
    }

    return balance;
  }

  IsTradeBalanced(factoryID: number): boolean {
    return Math.abs(this.GetTradeBalance(factoryID)) < 0.02;
  }
}

export class SaveData {
  Islands: IslandSaveInfo[]
}