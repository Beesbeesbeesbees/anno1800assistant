import { Factory } from "./factories";

export class PopulationLevelsFactory {
    private rawData: PopulationLevelRaw[] = [
        {"Name":"Obreros","Inputs":[{"ProductID":120020,"Amount":0.0,"SupplyWeight":5,"MoneyValue":0},{"ProductID":120033,"Amount":0.000952381,"SupplyWeight":3,"MoneyValue":25},{"ProductID":1010257,"Amount":0.000476191,"SupplyWeight":0,"MoneyValue":25},{"ProductID":120043,"Amount":0.000833333,"SupplyWeight":2,"MoneyValue":25},{"ProductID":120035,"Amount":0.00047619,"SupplyWeight":4,"MoneyValue":10},{"ProductID":120032,"Amount":0.000196079,"SupplyWeight":2,"MoneyValue":10},{"ProductID":120037,"Amount":0.000444444,"SupplyWeight":2,"MoneyValue":10},{"ProductID":1010214,"Amount":0.000444444,"SupplyWeight":0,"MoneyValue":30},{"ProductID":1010259,"Amount":0.000185185,"SupplyWeight":0,"MoneyValue":35},{"ProductID":1010206,"Amount":0.000416667,"SupplyWeight":2,"MoneyValue":25}]},
        {"Name":"Jornaleros","Inputs":[{"ProductID":120020,"Amount":0.0,"SupplyWeight":5,"MoneyValue":0},{"ProductID":120033,"Amount":0.00047619,"SupplyWeight":3,"MoneyValue":25},{"ProductID":1010257,"Amount":0.000238095,"SupplyWeight":0,"MoneyValue":25},{"ProductID":120043,"Amount":0.000416667,"SupplyWeight":2,"MoneyValue":25}]},
        {"Name":"Investors","Inputs":[{"ProductID":120030,"Amount":0.000296296,"SupplyWeight":16,"MoneyValue":100},{"ProductID":1010245,"Amount":0.000833333,"SupplyWeight":0,"MoneyValue":140},{"ProductID":120032,"Amount":0.001568627,"SupplyWeight":8,"MoneyValue":80},{"ProductID":1010246,"Amount":0.000261438,"SupplyWeight":0,"MoneyValue":180},{"ProductID":1010354,"Amount":0.0,"SupplyWeight":8,"MoneyValue":0},{"ProductID":1010208,"Amount":0.000416667,"SupplyWeight":8,"MoneyValue":140},{"ProductID":120016,"Amount":0.000392,"SupplyWeight":2,"MoneyValue":50},{"ProductID":1010259,"Amount":0.00037037,"SupplyWeight":2,"MoneyValue":50},{"ProductID":1010258,"Amount":0.000888889,"SupplyWeight":2,"MoneyValue":50},{"ProductID":1010250,"Amount":0.000350877,"SupplyWeight":0,"MoneyValue":250},{"ProductID":1010248,"Amount":0.0,"SupplyWeight":0,"MoneyValue":150},{"ProductID":1010225,"Amount":0.000111111,"SupplyWeight":4,"MoneyValue":300}]},
        {"Name":"Engineers","Inputs":[{"ProductID":1010217,"Amount":0.00034188,"SupplyWeight":12,"MoneyValue":40},{"ProductID":1010206,"Amount":0.000952381,"SupplyWeight":6,"MoneyValue":80},{"ProductID":1010257,"Amount":0.001904762,"SupplyWeight":0,"MoneyValue":100},{"ProductID":1010247,"Amount":0.000888889,"SupplyWeight":6,"MoneyValue":120},{"ProductID":1010353,"Amount":0.0,"SupplyWeight":6,"MoneyValue":0},{"ProductID":120030,"Amount":0.000148148,"SupplyWeight":4,"MoneyValue":50},{"ProductID":1010245,"Amount":0.000416667,"SupplyWeight":0,"MoneyValue":70},{"ProductID":120032,"Amount":0.000784314,"SupplyWeight":2,"MoneyValue":40},{"ProductID":1010246,"Amount":0.000130719,"SupplyWeight":0,"MoneyValue":90},{"ProductID":1010354,"Amount":0.0,"SupplyWeight":2,"MoneyValue":0},{"ProductID":1010208,"Amount":0.000208333,"SupplyWeight":2,"MoneyValue":70}]},
        {"Name":"Artisans","Inputs":[{"ProductID":1010238,"Amount":0.000666667,"SupplyWeight":6,"MoneyValue":40},{"ProductID":1010213,"Amount":0.000606061,"SupplyWeight":6,"MoneyValue":40},{"ProductID":1010203,"Amount":0.000277778,"SupplyWeight":4,"MoneyValue":40},{"ProductID":1010214,"Amount":0.000512821,"SupplyWeight":0,"MoneyValue":100},{"ProductID":1010351,"Amount":0.0,"SupplyWeight":4,"MoneyValue":0},{"ProductID":1010217,"Amount":0.00017094,"SupplyWeight":4,"MoneyValue":20},{"ProductID":1010206,"Amount":0.00047619,"SupplyWeight":2,"MoneyValue":40},{"ProductID":1010257,"Amount":0.000952381,"SupplyWeight":0,"MoneyValue":50},{"ProductID":1010247,"Amount":0.000444444,"SupplyWeight":2,"MoneyValue":60},{"ProductID":1010353,"Amount":0.0,"SupplyWeight":2,"MoneyValue":0}]},
        {"Name":"Workers","Inputs":[{"ProductID":120020,"Amount":0.0,"SupplyWeight":5,"MoneyValue":0},{"ProductID":1010200,"Amount":0.0008333334,"SupplyWeight":3,"MoneyValue":10},{"ProductID":1010216,"Amount":0.001111112,"SupplyWeight":0,"MoneyValue":30},{"ProductID":1010237,"Amount":0.001025642,"SupplyWeight":2,"MoneyValue":30},{"ProductID":1010238,"Amount":0.000333334,"SupplyWeight":3,"MoneyValue":20},{"ProductID":1010213,"Amount":0.00030303,"SupplyWeight":3,"MoneyValue":20},{"ProductID":1010203,"Amount":0.000138889,"SupplyWeight":2,"MoneyValue":20},{"ProductID":1010214,"Amount":0.00025641,"SupplyWeight":0,"MoneyValue":50},{"ProductID":1010351,"Amount":0.0,"SupplyWeight":2,"MoneyValue":0}]},
        {"Name":"Farmers","Inputs":[{"ProductID":120020,"Amount":0.0,"SupplyWeight":5,"MoneyValue":0},{"ProductID":1010200,"Amount":0.0004166667,"SupplyWeight":3,"MoneyValue":10},{"ProductID":1010216,"Amount":0.000555556,"SupplyWeight":0,"MoneyValue":30},{"ProductID":1010237,"Amount":0.000512821,"SupplyWeight":2,"MoneyValue":30}]}
    ];
    
    GetPopulationLevels(): PopulationLevel[] {
        let result: PopulationLevel[] = [];
        result[0] = new PopulationLevel(this.rawData.filter(x => x.Name === 'Farmers')[0]);
        result[1] = new PopulationLevel(this.rawData.filter(x => x.Name === 'Workers')[0]);
        result[2] = new PopulationLevel(this.rawData.filter(x => x.Name === 'Artisans')[0]);
        result[3] = new PopulationLevel(this.rawData.filter(x => x.Name === 'Engineers')[0]);
        result[4] = new PopulationLevel(this.rawData.filter(x => x.Name === 'Investors')[0]);
        result[5] = new PopulationLevel(this.rawData.filter(x => x.Name === 'Jornaleros')[0]);
        result[6] = new PopulationLevel(this.rawData.filter(x => x.Name === 'Obreros')[0]);

        result[0].PromotionTarget = result[1];
        result[1].PromotionTarget = result[2];
        result[2].PromotionTarget = result[3];
        result[3].PromotionTarget = result[4];
        result[5].PromotionTarget = result[6];

        return result;
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

        this.HouseCount -= promotionCount;
        this.PromotionTarget.HouseCount += promotionCount;
    }

    GetProductRequirement(productID: number): number {
        let input = this.Inputs.filter(i => i.ProductID === productID)[0];
        if (input) {
            return input.Amount * this.HouseCount;            
        }

        return 0;
    }
}

export class PopulationInput {
    ProductID: number
    Amount: number
    SupplyWeight: number
    MoneyValue: number
}