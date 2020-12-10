import { Region, RegionService } from '../data/region';
import { PopulationLevel, PopulationService, PopulationLevelSaveInfo } from '../data/populations';
import { Factory, FactorySaveInfo, Factories, FactoryGrouping } from '../data/factories';

export class Island {
  Name: string
  Region: Region;
  IsMinimized: boolean
  PopulationService: PopulationService;
  PopulationLevels: PopulationLevel[];
  Factories: Factory[];
  FactoryGroups: Factory[][];
  FactoryCounts: { [key: number]: IslandFactoryCount }
  ShowBuildingMaterials: boolean;
  ShowExports: boolean;

  constructor(name: string, populationService: PopulationService, saveInfo?: IslandSaveInfo) {
    this.PopulationService = populationService;
    this.Name = name;      
    this.Region = 'OldWorld';
          
    this.RegionChanged(saveInfo);
  }    
  
  RegionChanged(saveInfo?: IslandSaveInfo) {
      this.Factories = [];
      this.FactoryGroups = [];
      this.FactoryCounts = {};

      if (saveInfo) {            
          if (!saveInfo.Region) {
              // This save is from before the DLC update! We'll attempt to guess at its type based on the old convention.
              const oldWorldCount = saveInfo.PopulationLevels[0].HouseCount + saveInfo.PopulationLevels[1].HouseCount + saveInfo.PopulationLevels[2].HouseCount 
                  + saveInfo.PopulationLevels[3].HouseCount + saveInfo.PopulationLevels[4].HouseCount;
              const newWorldCount = saveInfo.PopulationLevels[5].HouseCount + saveInfo.PopulationLevels[6].HouseCount;

              if (newWorldCount > oldWorldCount) {
                  saveInfo.Region = 'NewWorld';
                  saveInfo.PopulationLevels = [
                      saveInfo.PopulationLevels[5],
                      saveInfo.PopulationLevels[6],
                  ];
              }
              else {
                  saveInfo.Region = 'OldWorld';
                  saveInfo.PopulationLevels = [
                      saveInfo.PopulationLevels[0],
                      saveInfo.PopulationLevels[1],
                      saveInfo.PopulationLevels[2],
                      saveInfo.PopulationLevels[3],
                      saveInfo.PopulationLevels[4],
                  ];
              }

              // For the grain silo update, grain farm was updated from factory ID 1010262 to 269851.
              for (let i = 0; i < saveInfo.Factories.length; i++) {
                if (saveInfo.Factories[i].FactoryID === 1010262) {
                  saveInfo.Factories[i].FactoryID = 269851;
                }
              }
          }

          this.Region = saveInfo.Region || this.Region;
          this.IsMinimized = saveInfo.IsMinimized;
          this.ShowBuildingMaterials = saveInfo.ShowBuildingMaterials;
          this.ShowExports = saveInfo.ShowExports;
          this.PopulationLevels = this.PopulationService.getNewPopulationForRegion(this.Region);      
        
          for (var i = 0; i < saveInfo.PopulationLevels.length; i++) {
              this.PopulationLevels[i].HouseCount = saveInfo.PopulationLevels[i].HouseCount;
              this.PopulationLevels[i].ShowUnused = saveInfo.PopulationLevels[i].ShowUnused;
          }

          // Old saves may not have factory counts (counts were saved per factory rather than per island)
          if (saveInfo.FactoryCount) {
            for (var i = 0; i < saveInfo.FactoryCount.length; i++) {
              this.FactoryCounts[saveInfo.FactoryCount[i].FactoryID] = {
                BuiltCount: saveInfo.FactoryCount[i].BuiltCount,
                TradeBalance: saveInfo.FactoryCount[i].TradeBalance,
                Productivity: saveInfo.FactoryCount[i].Productivity,
                UseSilo: saveInfo.FactoryCount[i].UseSilo,
                UseTractorBarn: saveInfo.FactoryCount[i].UseTractorBarn,
              }
            }
          }
      }
      else {
        this.PopulationLevels = this.PopulationService.getNewPopulationForRegion(this.Region);      
      }

      RegionService.regionFactories[this.Region].forEach(regionFactoryID => {
        this.AddFactoryChain(regionFactoryID, saveInfo, 'Regular');
      });
      RegionService.regionExports[this.Region].forEach(regionFactoryID => {
        this.AddFactoryChain(regionFactoryID, saveInfo, 'Export');
      })
      RegionService.regionBuildingMaterials[this.Region].forEach(regionFactoryID => {
        this.AddFactoryChain(regionFactoryID, saveInfo, 'Building Material');
      })

      if (this.Region === 'OldWorld') {
        // Manually add grain silos and tractor barns to old world
        this.AddFactoryChain(101, saveInfo, 'Regular');
        this.AddFactoryChain(103, saveInfo, 'Regular');
      }
      else if (this.Region === 'NewWorld') {
        // Manually add corn silos and tractor barns to new world
        this.AddFactoryChain(102, saveInfo, 'Regular');
        this.AddFactoryChain(103, saveInfo, 'Regular');
      }
      else if (this.Region === 'Enbesa') {
        // Manually add teff silos and tractor barns to Enbesa
        this.AddFactoryChain(104, saveInfo, 'Regular');
        this.AddFactoryChain(103, saveInfo, 'Regular');
      }
  }


  AddFactoryChain = (factoryID: number, saveInfo: IslandSaveInfo, type: FactoryGrouping): void => {
    let factory = new Factory(new Factories().AllFactories.filter(f => f.ID === factoryID)[0], type);

    this.FactoryCounts[factoryID] = this.FactoryCounts[factoryID] || {
      BuiltCount: 0,
      TradeBalance: 0,
      Productivity: 100,
      UseSilo: false,
      UseTractorBarn: false
    };    

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

        // For backwards compatibility
        this.FactoryCounts[factoryID].BuiltCount += (savedFactoryInfo.BuiltCount || 0);
        this.FactoryCounts[factoryID].Productivity = Math.max(this.FactoryCounts[factoryID].Productivity, (savedFactoryInfo.Productivity || 0));
        this.FactoryCounts[factoryID].TradeBalance += (savedFactoryInfo.TradeBalance || 0);
        this.FactoryCounts[factoryID].UseSilo = this.FactoryCounts[factoryID].UseSilo || (savedFactoryInfo.UseSilo === true);
        this.FactoryCounts[factoryID].UseTractorBarn = this.FactoryCounts[factoryID].UseTractorBarn || (savedFactoryInfo.UseTractorBarn === true);
      }
    }

    this.Factories.push(factory);    
    let group = [factory];
    this.ProcessChildFactories(factory, group, saveInfo);
    this.FactoryGroups.push(group);
  }


  ProcessChildFactories = (parentFactory: Factory, group: Factory[], saveInfo: IslandSaveInfo): void => {
    for (var i = 0; i < parentFactory.Inputs.length; i++) {
      let matchedRawFactories = new Factories().AllFactories.filter(f => 
        f.Outputs.filter(output => output.ProductID === parentFactory.Inputs[i].ProductID).length > 0
      );

      // Logic for matching factories:
      // First, we want to match on 'new world' and 'old world' flags to account for new world vs old world variants of factories
      // Then, if we have multiple results, we want to use the one that has a valid cycle time (to account for odd entries like fuel depots that have multiple entries in the game data)
      if (matchedRawFactories.length > 1) {
        matchedRawFactories.sort((a, b) => {
          if (a.IsNewWorld === parentFactory.IsNewWorld && b.IsNewWorld !== parentFactory.IsNewWorld) {
            return -1;
          }
          if (a.IsNewWorld !== parentFactory.IsNewWorld && b.IsNewWorld === parentFactory.IsNewWorld) {
            return 1;
          }
          if (a.CycleTime && !b.CycleTime) {
            return -1;
          }
          if (!a.CycleTime && b.CycleTime) {
            return 1;
          }
          
          return 0;
        });
      }

      const matchedRawFactory = matchedRawFactories[0];
      
      if (matchedRawFactory) {
        let newFactory = new Factory(matchedRawFactory, parentFactory.FactoryGrouping);

        this.FactoryCounts[newFactory.ID] = this.FactoryCounts[newFactory.ID] || {
          BuiltCount: 0,
          TradeBalance: 0,
          Productivity: 100,
          UseSilo: false,
          UseTractorBarn: false
        };    

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

            // For backwards compatibility
            this.FactoryCounts[newFactory.ID].BuiltCount += (savedFactoryInfo.BuiltCount || 0);
            this.FactoryCounts[newFactory.ID].Productivity = Math.max(this.FactoryCounts[newFactory.ID].Productivity, (savedFactoryInfo.Productivity || 0));
            this.FactoryCounts[newFactory.ID].TradeBalance += (savedFactoryInfo.TradeBalance || 0);
            this.FactoryCounts[newFactory.ID].UseSilo = this.FactoryCounts[newFactory.ID].UseSilo || (savedFactoryInfo.UseSilo === true);
            this.FactoryCounts[newFactory.ID].UseTractorBarn = this.FactoryCounts[newFactory.ID].UseTractorBarn || (savedFactoryInfo.UseTractorBarn === true);
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

  GetRequiredCountByFactoryID(factoryID: number): number {    
    let result = 0;

    for (let i = 0; i < this.Factories.length; i++) {
      
      if (this.Factories[i].ID !== factoryID) {
        continue;
      }
      
      result += this.Factories[i].GetRequiredCount(this);
    }      

    result /= this.FactoryCounts[factoryID].Productivity / 100;
    result -= Math.min(0, this.FactoryCounts[factoryID].TradeBalance);
    return Math.round(result * 100) / 100;
  }

  EnabledFactoryGroups(): Factory[][] {
    return this.FactoryGroups.filter(f => f[0].IsInUse(this));
  }

  GetColumnLayouts(): Factory[][] {
    const columnCount = 2;
    const columns: Factory[][] = [];
    for (var i = 0; i < columnCount; i++) {
      columns[i] = [];
    }
    
    const enabledGroups = this.EnabledFactoryGroups();
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

  GetTotalHouseCount(): number {
      let result = 0;

      if (!this.PopulationLevels) {
          return;
      }

      for (let i = 0; i < this.PopulationLevels.length; i++) {
          result += this.PopulationLevels[i].HouseCount;
      }

      return result;
  }

  ToggleSilo(factory: Factory) {
    if (!factory.Enabled) {
        return;
    }

    this.FactoryCounts[factory.ID].UseSilo = !this.FactoryCounts[factory.ID].UseSilo;
    
    if (this.FactoryCounts[factory.ID].UseSilo) {
        // +100%, plus an additional product every 3rd cycle = 200 * 4 / 3 = 266.67
        this.FactoryCounts[factory.ID].Productivity = 266.67;
    }
    else {
      this.FactoryCounts[factory.ID].Productivity = 100;
    }
  }

  ToggleTractorBarn(factory: Factory) {
    if (!factory.Enabled) {
          return;
      }

      this.FactoryCounts[factory.ID].UseTractorBarn = !this.FactoryCounts[factory.ID].UseTractorBarn;
      
      if (this.FactoryCounts[factory.ID].UseTractorBarn) {
          // +200%, plus an additional product every 3rd cycle = 300 * 4 / 3 = 400
          this.FactoryCounts[factory.ID].Productivity = 400;
      }
      else {
        this.FactoryCounts[factory.ID].Productivity = 100;
      }
  }

  ToggleShowBuildingMaterials() {
    this.ShowBuildingMaterials = !this.ShowBuildingMaterials;
  }  

  ToggleShowExports() {
    this.ShowExports = !this.ShowExports;
  }

  ToggleMinimized() {
    this.IsMinimized = !this.IsMinimized;
  }
}

export class IslandSaveInfo {
  Name: string
  Region: Region
  IsMinimized: boolean
  ShowBuildingMaterials: boolean;
  ShowExports: boolean;
  FactoryCount: IslandFactoryCountSaveInfo[]
  PopulationLevels: PopulationLevelSaveInfo[]
  Factories: FactorySaveInfo[]
}

export interface IslandFactoryCount {
  BuiltCount: number;
  TradeBalance: number;
  Productivity: number;
  UseSilo: boolean;
  UseTractorBarn: boolean;
}

export interface IslandFactoryCountSaveInfo extends IslandFactoryCount {
  FactoryID: number;
}