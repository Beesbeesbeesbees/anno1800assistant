import { Factory } from "./factories";
import { Injectable } from '@angular/core';
import { Region } from './region';

@Injectable()
export class PopulationService {
    private rawData: PopulationLevelRaw[] = [
        {"Name":"Scholars","Inputs":[{"ProductID":1010353,"Amount":0.0,"SupplyWeight":12,"MoneyValue":0},{"ProductID":1010217,"Amount":0.001,"SupplyWeight":19,"MoneyValue":0},{"ProductID":114428,"Amount":0.002,"SupplyWeight":0,"MoneyValue":0},{"ProductID":1010257,"Amount":0.0008,"SupplyWeight":0,"MoneyValue":0},{"ProductID":114430,"Amount":0.00275,"SupplyWeight":23,"MoneyValue":0},{"ProductID":120037,"Amount":0.0008,"SupplyWeight":0,"MoneyValue":0},{"ProductID":114390,"Amount":0.00175,"SupplyWeight":0,"MoneyValue":0},{"ProductID":1010354,"Amount":0.0,"SupplyWeight":12,"MoneyValue":0},{"ProductID":114410,"Amount":0.0015,"SupplyWeight":22,"MoneyValue":0},{"ProductID":114404,"Amount":0.00125,"SupplyWeight":0,"MoneyValue":0},{"ProductID":114414,"Amount":0.00075,"SupplyWeight":0,"MoneyValue":0},{"ProductID":114431,"Amount":0.0015,"SupplyWeight":20,"MoneyValue":0},{"ProductID":114425,"Amount":0.0,"SupplyWeight":12,"MoneyValue":0},{"ProductID":1010248,"Amount":0.0007,"SupplyWeight":0,"MoneyValue":0}]},
        {"Name":"Elders","Inputs":[{"ProductID":120020,"Amount":0.0,"SupplyWeight":3,"MoneyValue":0},{"ProductID":114371,"Amount":0.001,"SupplyWeight":3,"MoneyValue":12},{"ProductID":114401,"Amount":0.0005,"SupplyWeight":2,"MoneyValue":12},{"ProductID":114359,"Amount":0.0007,"SupplyWeight":2,"MoneyValue":15},{"ProductID":114390,"Amount":0.0004,"SupplyWeight":0,"MoneyValue":20},{"ProductID":118724,"Amount":0.0004,"SupplyWeight":2,"MoneyValue":10},{"ProductID":114404,"Amount":0.00035,"SupplyWeight":0,"MoneyValue":25},{"ProductID":114410,"Amount":0.00037,"SupplyWeight":3,"MoneyValue":15},{"ProductID":114414,"Amount":0.00015,"SupplyWeight":0,"MoneyValue":24},{"ProductID":117698,"Amount":0.00018,"SupplyWeight":2,"MoneyValue":16},{"ProductID":120030,"Amount":0.00012,"SupplyWeight":0,"MoneyValue":34},{"ProductID":117699,"Amount":0.0003,"SupplyWeight":3,"MoneyValue":25}]},
        {"Name":"Shepherds","Inputs":[{"ProductID":120020,"Amount":0.0,"SupplyWeight":3,"MoneyValue":0},{"ProductID":114371,"Amount":0.0005,"SupplyWeight":3,"MoneyValue":12},{"ProductID":114401,"Amount":0.00025,"SupplyWeight":2,"MoneyValue":12},{"ProductID":114359,"Amount":0.00035,"SupplyWeight":2,"MoneyValue":15},{"ProductID":114390,"Amount":0.0002,"SupplyWeight":0,"MoneyValue":20}]},
        {"Name":"Technicians","Inputs":[{"ProductID":114890,"Amount":0.0,"SupplyWeight":4,"MoneyValue":20},{"ProductID":112705,"Amount":0.0004,"SupplyWeight":3,"MoneyValue":40},{"ProductID":112702,"Amount":0.0002,"SupplyWeight":3,"MoneyValue":70},{"ProductID":112693,"Amount":0.0,"SupplyWeight":3,"MoneyValue":30},{"ProductID":1010217,"Amount":0.0002,"SupplyWeight":3,"MoneyValue":50},{"ProductID":112703,"Amount":0.0003,"SupplyWeight":4,"MoneyValue":80},{"ProductID":112701,"Amount":0.0003,"SupplyWeight":0,"MoneyValue":50},{"ProductID":1010216,"Amount":0.0005,"SupplyWeight":0,"MoneyValue":35},{"ProductID":112700,"Amount":0.0004,"SupplyWeight":0,"MoneyValue":45},{"ProductID":120032,"Amount":0.0004,"SupplyWeight":0,"MoneyValue":60}]},
        {"Name":"Explorers","Inputs":[{"ProductID":114890,"Amount":0.0,"SupplyWeight":4,"MoneyValue":20},{"ProductID":112705,"Amount":0.0002,"SupplyWeight":3,"MoneyValue":40},{"ProductID":112702,"Amount":0.0001,"SupplyWeight":3,"MoneyValue":70},{"ProductID":112701,"Amount":0.00015,"SupplyWeight":0,"MoneyValue":50},{"ProductID":1010216,"Amount":0.00025,"SupplyWeight":0,"MoneyValue":35}]},
        {"Name":"Obreros","Inputs":[{"ProductID":120020,"Amount":0.0,"SupplyWeight":5,"MoneyValue":0},{"ProductID":120033,"Amount":0.000952381,"SupplyWeight":3,"MoneyValue":25},{"ProductID":1010257,"Amount":0.000476191,"SupplyWeight":0,"MoneyValue":25},{"ProductID":120043,"Amount":0.000833333,"SupplyWeight":2,"MoneyValue":25},{"ProductID":120035,"Amount":0.00047619,"SupplyWeight":4,"MoneyValue":10},{"ProductID":120032,"Amount":0.000196079,"SupplyWeight":2,"MoneyValue":10},{"ProductID":120037,"Amount":0.000444444,"SupplyWeight":2,"MoneyValue":10},{"ProductID":1010214,"Amount":0.000444444,"SupplyWeight":0,"MoneyValue":30},{"ProductID":1010259,"Amount":0.000185185,"SupplyWeight":0,"MoneyValue":35},{"ProductID":1010206,"Amount":0.000416667,"SupplyWeight":2,"MoneyValue":25}]},
        {"Name":"Jornaleros","Inputs":[{"ProductID":120020,"Amount":0.0,"SupplyWeight":5,"MoneyValue":0},{"ProductID":120033,"Amount":0.00047619,"SupplyWeight":3,"MoneyValue":25},{"ProductID":1010257,"Amount":0.000238095,"SupplyWeight":0,"MoneyValue":25},{"ProductID":120043,"Amount":0.000416667,"SupplyWeight":2,"MoneyValue":25}]},
        {"Name":"Investors","Inputs":[{"ProductID":120030,"Amount":0.000296296,"SupplyWeight":16,"MoneyValue":100},{"ProductID":1010245,"Amount":0.000833333,"SupplyWeight":0,"MoneyValue":140},{"ProductID":120032,"Amount":0.001568627,"SupplyWeight":8,"MoneyValue":80},{"ProductID":1010246,"Amount":0.000261438,"SupplyWeight":0,"MoneyValue":180},{"ProductID":1010354,"Amount":0.0,"SupplyWeight":8,"MoneyValue":0},{"ProductID":1010208,"Amount":0.000416667,"SupplyWeight":8,"MoneyValue":140},{"ProductID":120016,"Amount":0.000392,"SupplyWeight":2,"MoneyValue":50},{"ProductID":1010259,"Amount":0.00037037,"SupplyWeight":2,"MoneyValue":50},{"ProductID":1010258,"Amount":0.000888889,"SupplyWeight":2,"MoneyValue":50},{"ProductID":1010250,"Amount":0.000350877,"SupplyWeight":0,"MoneyValue":250},{"ProductID":1010248,"Amount":0.0,"SupplyWeight":0,"MoneyValue":150},{"ProductID":1010225,"Amount":0.000111111,"SupplyWeight":4,"MoneyValue":300}]},
        {"Name":"Engineers","Inputs":[{"ProductID":1010217,"Amount":0.00034188,"SupplyWeight":12,"MoneyValue":40},{"ProductID":1010206,"Amount":0.000952381,"SupplyWeight":6,"MoneyValue":80},{"ProductID":1010257,"Amount":0.001904762,"SupplyWeight":0,"MoneyValue":100},{"ProductID":1010247,"Amount":0.000888889,"SupplyWeight":6,"MoneyValue":120},{"ProductID":1010353,"Amount":0.0,"SupplyWeight":6,"MoneyValue":0},{"ProductID":120030,"Amount":0.000148148,"SupplyWeight":4,"MoneyValue":50},{"ProductID":1010245,"Amount":0.000416667,"SupplyWeight":0,"MoneyValue":70},{"ProductID":120032,"Amount":0.000784314,"SupplyWeight":2,"MoneyValue":40},{"ProductID":1010246,"Amount":0.000130719,"SupplyWeight":0,"MoneyValue":90},{"ProductID":1010354,"Amount":0.0,"SupplyWeight":2,"MoneyValue":0},{"ProductID":1010208,"Amount":0.000208333,"SupplyWeight":2,"MoneyValue":70}]},
        {"Name":"Artisans","Inputs":[{"ProductID":1010238,"Amount":0.000666667,"SupplyWeight":6,"MoneyValue":40},{"ProductID":1010213,"Amount":0.000606061,"SupplyWeight":6,"MoneyValue":40},{"ProductID":1010203,"Amount":0.000277778,"SupplyWeight":4,"MoneyValue":40},{"ProductID":1010214,"Amount":0.000512821,"SupplyWeight":0,"MoneyValue":100},{"ProductID":1010351,"Amount":0.0,"SupplyWeight":4,"MoneyValue":0},{"ProductID":1010217,"Amount":0.00017094,"SupplyWeight":4,"MoneyValue":20},{"ProductID":1010206,"Amount":0.00047619,"SupplyWeight":2,"MoneyValue":40},{"ProductID":1010257,"Amount":0.000952381,"SupplyWeight":0,"MoneyValue":50},{"ProductID":1010247,"Amount":0.000444444,"SupplyWeight":2,"MoneyValue":60},{"ProductID":1010353,"Amount":0.0,"SupplyWeight":2,"MoneyValue":0}]},
        {"Name":"Workers","Inputs":[{"ProductID":120020,"Amount":0.0,"SupplyWeight":5,"MoneyValue":0},{"ProductID":1010200,"Amount":0.0008333334,"SupplyWeight":3,"MoneyValue":10},{"ProductID":1010216,"Amount":0.001111112,"SupplyWeight":0,"MoneyValue":30},{"ProductID":1010237,"Amount":0.001025642,"SupplyWeight":2,"MoneyValue":30},{"ProductID":1010238,"Amount":0.000333334,"SupplyWeight":3,"MoneyValue":20},{"ProductID":1010213,"Amount":0.00030303,"SupplyWeight":3,"MoneyValue":20},{"ProductID":1010203,"Amount":0.000138889,"SupplyWeight":2,"MoneyValue":20},{"ProductID":1010214,"Amount":0.00025641,"SupplyWeight":0,"MoneyValue":50},{"ProductID":1010351,"Amount":0.0,"SupplyWeight":2,"MoneyValue":0}]},
        {"Name":"Farmers","Inputs":[{"ProductID":120020,"Amount":0.0,"SupplyWeight":5,"MoneyValue":0},{"ProductID":1010200,"Amount":0.0004166667,"SupplyWeight":3,"MoneyValue":10},{"ProductID":1010216,"Amount":0.000555556,"SupplyWeight":0,"MoneyValue":30},{"ProductID":1010237,"Amount":0.000512821,"SupplyWeight":2,"MoneyValue":30}]}        
    ];

    getNewPopulationForRegion(region: Region): PopulationLevel[] {
        return this.createMethods[region]();
    }

    private createMethods: { [key in Region]: () => PopulationLevel[] } = {
        'OldWorld': () => {
            const result: PopulationLevel[] = [
                new PopulationLevel(this.rawData.filter(x => x.Name === 'Farmers')[0]),
                new PopulationLevel(this.rawData.filter(x => x.Name === 'Workers')[0]),
                new PopulationLevel(this.rawData.filter(x => x.Name === 'Artisans')[0]),
                new PopulationLevel(this.rawData.filter(x => x.Name === 'Engineers')[0]),
                new PopulationLevel(this.rawData.filter(x => x.Name === 'Investors')[0]),
                new PopulationLevel(this.rawData.filter(x => x.Name === 'Scholars')[0]),
            ];
    
            result[0].PromotionTarget = result[1];
            result[1].PromotionTarget = result[2];
            result[2].PromotionTarget = result[3];
            result[3].PromotionTarget = result[4];
            result[4].PromotionTarget = result[5];
    
            return result;
        }, 'NewWorld': () => {
            const result: PopulationLevel[] = [
                new PopulationLevel(this.rawData.filter(x => x.Name === 'Jornaleros')[0]),
                new PopulationLevel(this.rawData.filter(x => x.Name === 'Obreros')[0]),
            ];

            result[0].PromotionTarget = result[1];

            return result;
        }, 'Arctic': () => {
            const result: PopulationLevel[] = [
                new PopulationLevel(this.rawData.filter(x => x.Name === 'Explorers')[0]),
                new PopulationLevel(this.rawData.filter(x => x.Name === 'Technicians')[0]),
            ];

            result[0].PromotionTarget = result[1];

            return result;
        }, 'Enbasa': () => {
            const result: PopulationLevel[] = [
                new PopulationLevel(this.rawData.filter(x => x.Name === 'Shepherds')[0]),
                new PopulationLevel(this.rawData.filter(x => x.Name === 'Elders')[0]),
            ];

            result[0].PromotionTarget = result[1];

            return result;
        }
    }
}

class PopulationLevelRaw {
    Name: string
    Inputs: PopulationInput[]
}



export class PopulationLevel extends PopulationLevelRaw {
    constructor(raw: PopulationLevelRaw) {
        super();        
        this.Name = raw.Name;
        this.Inputs = raw.Inputs;
    }

    HouseCount: number = 0    
    PromotionTarget: PopulationLevel
    ShowUnused: boolean
    
    GetPopulation(factories: Factory[]): number {
        let supplyWeight = 5;

        let enabledOutputProductIDs = {};
        for (var i = 0; i < factories.length; i++) {
            if (factories[i].Enabled) {
                enabledOutputProductIDs[factories[i].Outputs[0].ProductID] = true;
            }
        }

        for (var i = 0; i < this.Inputs.length; i++) {
            let enabled = enabledOutputProductIDs[this.Inputs[i].ProductID];
            if (enabled) {
                supplyWeight += this.Inputs[i].SupplyWeight;
            }
        }

        return supplyWeight * this.HouseCount;        
    }
    
    Promote(promotionCount: number): void {
        if (!this.PromotionTarget) {
            return;
        }

        if (this.HouseCount - promotionCount < 0){
            promotionCount = this.HouseCount;
        }

        this.HouseCount -= promotionCount;
        this.PromotionTarget.HouseCount += promotionCount;
    }

    ToggleShowUnused(): void {
        this.ShowUnused = !this.ShowUnused;
    }

    AddHouses(houseCount: number): void {
        this.HouseCount += houseCount;
    }

    GetProductRequirement(productID: number): number {
        let input = this.Inputs.filter(i => i.ProductID === productID)[0];
        if (input) {
            return input.Amount * this.HouseCount;            
        }

        return 0;
    }

    Save(): PopulationLevelSaveInfo {
        return {
            HouseCount: this.HouseCount,
            ShowUnused: this.ShowUnused
        };
    }
}

export class PopulationInput {
    ProductID: number
    Amount: number
    SupplyWeight: number
    MoneyValue: number
}

export class PopulationLevelSaveInfo {
    HouseCount: number
    ShowUnused: boolean
}