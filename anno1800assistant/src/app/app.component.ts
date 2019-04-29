import { Component, OnInit, HostListener, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { PopulationLevelsFactory, PopulationLevel, PopulationLevelSaveInfo } from './data/populations';
import { Factory, Factories, FactorySaveInfo } from './data/factories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  Islands: Island[]
  Shift_key_held: boolean = false;
  Ctrl_key_held: boolean = false;
  Autosave_throttle: Date;
  FocusedFactoryID: number;

  ngOnInit() {
    this.Autosave_throttle = new Date(new Date().getTime() + 100)
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
    this.Islands = [];
    this.AddIsland();
  }  

  AddIsland() {
    this.Islands.push(new Island("Island " + (this.Islands.length + 1)));
  }

  MoveIslandUp(index: number) {
    let island = this.Islands[index];
    this.Islands.splice(index, 1);
    this.Islands.splice(index - 1, 0, island);
  }

  MoveIslandDown(index: number) {
    let island = this.Islands[index];
    this.Islands.splice(index, 1);
    this.Islands.splice(index + 1, 0, island);
  }

  SetFocusedFactoryID(factoryID: number) {
    this.FocusedFactoryID = factoryID;
  }

  ClearFocusedFactoryID() {
    this.FocusedFactoryID = null;
  }

  Autosave() {
    if (this.Autosave_throttle && new Date() < this.Autosave_throttle) {
      return;
    }

    window.localStorage.setItem('anno1800assistantsave', JSON.stringify(this.GenerateSaveData()));
    this.Autosave_throttle = new Date(new Date().getTime() + 100)
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
      self.Autosave_throttle = null;
      self.Autosave();
    }
  
    reader.readAsText(event.target.files[0]);
  }

  GenerateSaveData(): SaveData {
    let save: IslandSaveInfo[] = [];
    for (var i = 0; i < this.Islands.length; i++) {
      let island = this.Islands[i];
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
        PopulationLevels: populationLevels,
        Factories: factories,
        IsMinimized: island.IsMinimized
      });
    }

    return { Islands: save };
  }

  LoadData(data: SaveData) {
    this.Islands = [];      
    for (var i = 0; i < data.Islands.length; i++) {
      this.Islands.push(new Island(data.Islands[i].Name, data.Islands[i]));
    }
  }

  @ViewChild('loadInput') loadInput: ElementRef;

  @HostListener('window:keydown', ['$event'])
  keyDownEvent(event: KeyboardEvent) {        
    if (event.keyCode === 16) {
      this.Shift_key_held = true;
    }

    if (event.keyCode === 17) {
      this.Ctrl_key_held = true;
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyUpEvent(event: KeyboardEvent) {        
    if (event.keyCode === 16) {
      this.Shift_key_held = false;
    }

    if (event.keyCode === 17) {
      this.Ctrl_key_held = false;
    }
  }

  PromotionCount(): number {
    return 1 * (this.Ctrl_key_held ? 5 : 1) * (this.Shift_key_held ? 10 : 1);
  }

  GetTradeBalance(factoryID: number): number {
    let balance = 0;

    for (var i = 0; i < this.Islands.length; i++) {
      let factory = this.Islands[i].Factories.filter(f => f.ID === factoryID)[0];
      balance += (factory.Productivity * factory.TradeBalance / 100);
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

export class IslandSaveInfo {
  Name: string
  PopulationLevels: PopulationLevelSaveInfo[]
  Factories: FactorySaveInfo[]
  IsMinimized: boolean
}

export class Island {
  Name: string
  PopulationLevels: PopulationLevel[]
  Factories: Factory[]
  FactoryGroups: Factory[][]
  IsMinimized: boolean

  ToggleMinimized() {
    this.IsMinimized = !this.IsMinimized;
  }

  constructor(name: string, saveInfo?: IslandSaveInfo) {
    this.Name = name;
    this.IsMinimized = false;

    this.PopulationLevels = new PopulationLevelsFactory().GetPopulationLevels();
    if (saveInfo) {      
      for (var i = 0; i < saveInfo.PopulationLevels.length; i++) {
        this.PopulationLevels[i].HouseCount = saveInfo.PopulationLevels[i].HouseCount;
        this.PopulationLevels[i].ShowUnused = saveInfo.PopulationLevels[i].ShowUnused;
      }
      this.IsMinimized = saveInfo.IsMinimized;
    }

    this.Factories = [];
    this.FactoryGroups = [];

    // Referencing factories by ID here for possible additional language support
    // Farmers
    this.AddFactoryChain(1010278, saveInfo); // Fishery    
    this.AddFactoryChain(1010294, saveInfo); // Schnapps
    this.AddFactoryChain(1010315, saveInfo); // Knitter
    // Workers
    this.AddFactoryChain(1010316, saveInfo); // Sausages
    this.AddFactoryChain(1010291, saveInfo); // Bread
    this.AddFactoryChain(1010281, saveInfo); // Soap
    this.AddFactoryChain(1010292, saveInfo); // Beer
    this.AddFactoryChain(1010360, saveInfo); // School
    // Artisans
    this.AddFactoryChain(1010295, saveInfo); // Canned Food
    this.AddFactoryChain(1010284, saveInfo); // Sewing Machines
    this.AddFactoryChain(1010340, saveInfo); // Rum
    this.AddFactoryChain(1010325, saveInfo); // Fur Coats
    this.AddFactoryChain(1010362, saveInfo); // University
    // Engineers
    this.AddFactoryChain(101250, saveInfo); // Glasses
    this.AddFactoryChain(1010323, saveInfo); // High Wheelers
    this.AddFactoryChain(1, saveInfo); // Electricity
    this.AddFactoryChain(101252, saveInfo); // Coffee
    this.AddFactoryChain(1010324, saveInfo); // Pocket Watches
    this.AddFactoryChain(1010286, saveInfo); // Light Bulbs
    this.AddFactoryChain(1010365, saveInfo); // Bank
    // Investors
    this.AddFactoryChain(100659, saveInfo); // Champagne
    this.AddFactoryChain(1010342, saveInfo); // Cigars
    this.AddFactoryChain(1010364, saveInfo); // Club House
    this.AddFactoryChain(1010341, saveInfo); // Chocolate
    this.AddFactoryChain(1010328, saveInfo); // Jewelry
    this.AddFactoryChain(1010326, saveInfo); // Gramophones
    this.AddFactoryChain(1010303, saveInfo); // Steam Carriages
    // Jornaleros
    this.AddFactoryChain(101264, saveInfo); // Fried Plantains
    // this.addFactoryChain(1010340); // Rum
    this.AddFactoryChain(101266, saveInfo); // Ponchos
    this.AddFactoryChain(2, saveInfo); // Chapel
    // Obreros
    this.AddFactoryChain(101271, saveInfo); // Tortillas
    // this.addFactoryChain(101252); // Coffee
    this.AddFactoryChain(3, saveInfo); // Boxing Arena
    this.AddFactoryChain(101273, saveInfo); // Bowler Hats
    // this.addFactoryChain(1010292); // Beer
    // this.addFactoryChain(1010284); // Sewing Machines
    // this.addFactoryChain(1010342); // Cigars
  }


  AddFactoryChain(factoryID: number, saveInfo: IslandSaveInfo) {
    let factory = new Factory(new Factories().AllFactories.filter(f => f.ID === factoryID)[0]);

    if (saveInfo) {
      let savedFactoryInfos = saveInfo.Factories.filter(f => f.FactoryID === factory.ID);
      let savedFactoryInfo = savedFactoryInfos[0];

      if (savedFactoryInfos.length > 1) {
        let matchingSavedFactoryInfo = savedFactoryInfos.filter(f => f.ParentFactoryID === factory.ParentFactoryOrThisRecursive.ID)[0];
        
        // Doing a check here to make sure we matched to be backwards-compatible with old saves. This can eventually be removed.
        if (matchingSavedFactoryInfo) {
          savedFactoryInfo = matchingSavedFactoryInfo;
        }
      }          

      if (savedFactoryInfo) {
        factory.Enabled = savedFactoryInfo.Enabled;
        factory.BuiltCount = savedFactoryInfo.BuiltCount;
        factory.Productivity = savedFactoryInfo.Productivity;
        factory.TradeBalance = savedFactoryInfo.TradeBalance;
      }
    }

    this.Factories.push(factory);    
    let group = [factory];
    this.ProcessChildFactories(factory, group, saveInfo);
    this.FactoryGroups.push(group);
  }


  ProcessChildFactories(parentFactory: Factory, group: Factory[], saveInfo: IslandSaveInfo) {
    for (var i = 0; i < parentFactory.Inputs.length; i++) {
      let matchedRawFactories = new Factories().AllFactories.filter(f => 
        f.Outputs.filter(output => output.ProductID === parentFactory.Inputs[i].ProductID).length > 0
      );

      // Accounting for new world variants of factories
      let matchedRawFactory = matchedRawFactories[0];
      if (matchedRawFactories.length > 1) {
        matchedRawFactory = matchedRawFactories.filter(f => f.IsNewWorld === parentFactory.IsNewWorld && f.IsOldWorld === parentFactory.IsOldWorld)[0];
      }

      if (matchedRawFactory) {
        let newFactory = new Factory(matchedRawFactory);

        if (saveInfo) {
          let savedFactoryInfos = saveInfo.Factories.filter(f => f.FactoryID === newFactory.ID);
          let savedFactoryInfo = savedFactoryInfos[0];

          if (savedFactoryInfos.length > 1) {
            let matchingSavedFactoryInfo = savedFactoryInfos.filter(f => f.ParentFactoryID === parentFactory.ParentFactoryOrThisRecursive.ID)[0];
            
            // Doing a check here to make sure we matched to be backwards-compatible with old saves. This can eventually be removed.
            if (matchingSavedFactoryInfo) {
              savedFactoryInfo = matchingSavedFactoryInfo;
            }
          }          

          if (savedFactoryInfo) {
            newFactory.Enabled = savedFactoryInfo.Enabled;
            newFactory.BuiltCount = savedFactoryInfo.BuiltCount;
            newFactory.Productivity = savedFactoryInfo.Productivity;
            newFactory.TradeBalance = savedFactoryInfo.TradeBalance;
          }
        }

        parentFactory.ChildFactories.push(newFactory);
        newFactory.ParentFactory = parentFactory;
        this.Factories.push(newFactory);
        group.push(newFactory);
        this.ProcessChildFactories(newFactory, group, saveInfo);
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