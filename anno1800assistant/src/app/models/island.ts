import { Region } from '../data/region';
import { PopulationLevel, PopulationService, PopulationLevelSaveInfo } from '../data/populations';
import { Factory, FactorySaveInfo, Factories } from '../data/factories';

export class Island {
    Name: string
    Region: Region;
    IsMinimized: boolean
    PopulationService: PopulationService;
    PopulationLevels: PopulationLevel[]
    Factories: Factory[]
    FactoryGroups: Factory[][]
  
    constructor(name: string, populationService: PopulationService, saveInfo?: IslandSaveInfo) {
      this.PopulationService = populationService;
      this.Name = name;      
      this.Region = 'OldWorld';
            
      this.RegionChanged(saveInfo);
    }    
    
    RegionChanged(saveInfo?: IslandSaveInfo) {
        this.Factories = [];
        this.FactoryGroups = [];

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
            }

            this.Region = saveInfo.Region || this.Region;
            this.IsMinimized = saveInfo.IsMinimized;
            this.PopulationLevels = this.PopulationService.getNewPopulationForRegion(this.Region);      
          
            for (var i = 0; i < saveInfo.PopulationLevels.length; i++) {
                this.PopulationLevels[i].HouseCount = saveInfo.PopulationLevels[i].HouseCount;
                this.PopulationLevels[i].ShowUnused = saveInfo.PopulationLevels[i].ShowUnused;
            }
        }
        else {
          this.PopulationLevels = this.PopulationService.getNewPopulationForRegion(this.Region);      
        }
    
        // Referencing factories by ID here for possible additional language support
        if (this.Region === 'OldWorld') {
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
        }

        else if (this.Region === 'NewWorld') {
            // Jornaleros
            this.AddFactoryChain(101264, saveInfo); // Fried Plantains
            this.AddFactoryChain(1010340, saveInfo); // Rum
            this.AddFactoryChain(101266, saveInfo); // Ponchos
            this.AddFactoryChain(2, saveInfo); // Chapel
            // Obreros
            this.AddFactoryChain(101271, saveInfo); // Tortillas
            this.AddFactoryChain(101252, saveInfo); // Coffee
            this.AddFactoryChain(3, saveInfo); // Boxing Arena
            this.AddFactoryChain(101273, saveInfo); // Bowler Hats
            this.AddFactoryChain(1010292, saveInfo); // Beer
            this.AddFactoryChain(1010284, saveInfo); // Sewing Machines
            this.AddFactoryChain(1010342, saveInfo); // Cigars
        }
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
  }

  export class IslandSaveInfo {
    Name: string
    Region: Region
    IsMinimized: boolean
    PopulationLevels: PopulationLevelSaveInfo[]
    Factories: FactorySaveInfo[]
  }