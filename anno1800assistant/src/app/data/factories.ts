import { PopulationLevel } from "./populations";
import { Island } from '../models/island';

export class Factories {
    private getRaw(): FactoryRaw[] {
        return [
            {"ID":118736,"Name":"Radio Tower","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":114425,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":118735,"Name":"Telephone Manufacturer","CycleTime":90,"Inputs":[{"ProductID":1010243,"Amount":1},{"ProductID":1010242,"Amount":1}],"Outputs":[{"ProductID":114431,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":118734,"Name":"Tailor's Shop","CycleTime":60,"Inputs":[{"ProductID":114391,"Amount":1},{"ProductID":1010240,"Amount":1}],"Outputs":[{"ProductID":114430,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":118733,"Name":"Bootmakers","CycleTime":60,"Inputs":[{"ProductID":114357,"Amount":1}],"Outputs":[{"ProductID":114428,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114520,"Name":"Monastery","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":114362,"Amount":0}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114519,"Name":"Musicians' Court","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":114361,"Amount":0}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114464,"Name":"Lanternsmith","CycleTime":60,"Inputs":[{"ProductID":1010241,"Amount":1},{"ProductID":117701,"Amount":1}],"Outputs":[{"ProductID":117699,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114470,"Name":"Luminer","CycleTime":60,"Inputs":[{"ProductID":114368,"Amount":1},{"ProductID":117702,"Amount":1}],"Outputs":[{"ProductID":117698,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114472,"Name":"Pipe Maker","CycleTime":90,"Inputs":[{"ProductID":1010201,"Amount":1},{"ProductID":1010252,"Amount":1}],"Outputs":[{"ProductID":114414,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114471,"Name":"Wat Kitchen","CycleTime":60,"Inputs":[{"ProductID":114408,"Amount":1},{"ProductID":118728,"Amount":1}],"Outputs":[{"ProductID":114410,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114467,"Name":"Brick Dry-House","CycleTime":60,"Inputs":[{"ProductID":1010201,"Amount":1},{"ProductID":114367,"Amount":1}],"Outputs":[{"ProductID":114402,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114469,"Name":"Tapestry Looms","CycleTime":0,"Inputs":[{"ProductID":114368,"Amount":1},{"ProductID":114391,"Amount":1}],"Outputs":[{"ProductID":114404,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":118725,"Name":"Ceramics Workshop","CycleTime":0,"Inputs":[{"ProductID":114368,"Amount":1},{"ProductID":1010201,"Amount":1}],"Outputs":[{"ProductID":118724,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114468,"Name":"Tea Spicer","CycleTime":90,"Inputs":[{"ProductID":114364,"Amount":1}],"Outputs":[{"ProductID":114390,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114466,"Name":"Embroiderer","CycleTime":60,"Inputs":[{"ProductID":114391,"Amount":1}],"Outputs":[{"ProductID":114401,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114444,"Name":"Dry-House","CycleTime":0,"Inputs":[{"ProductID":114357,"Amount":1},{"ProductID":114358,"Amount":1}],"Outputs":[{"ProductID":114359,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114461,"Name":"Chandler","CycleTime":0,"Inputs":[{"ProductID":114370,"Amount":1},{"ProductID":1010253,"Amount":1}],"Outputs":[{"ProductID":117701,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114459,"Name":"Teff Mill","CycleTime":0,"Inputs":[{"ProductID":114367,"Amount":1},{"ProductID":114369,"Amount":1}],"Outputs":[{"ProductID":114408,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114441,"Name":"Linen Mill","CycleTime":0,"Inputs":[{"ProductID":114365,"Amount":1}],"Outputs":[{"ProductID":114391,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":117744,"Name":"Paper Mill","CycleTime":15,"Inputs":[{"ProductID":120008,"Amount":1}],"Outputs":[{"ProductID":117702,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":117743,"Name":"Clay Collector","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":1010201,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":118729,"Name":"Lobster Fishery","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":118728,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114440,"Name":"Salt Works","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":114358,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114439,"Name":"Sanga Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":114357,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":true,"CanHaveTractorBarn":false},
            {"ID":114456,"Name":"Goat Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":114371,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":true,"CanHaveTractorBarn":false},
            {"ID":114453,"Name":"Apiary","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":114370,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":114452,"Name":"Spice Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":114369,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":114451,"Name":"Indigo Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":114368,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":114450,"Name":"Teff Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":114367,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":114447,"Name":"Hibiscus Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":114364,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":114448,"Name":"Linseed Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":114365,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":122963,"Name":"Wanza Woodcutter","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":114356,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":270044,"Name":"Fuel Station (GASOLINE TEST)","CycleTime":0,"Inputs":[{"ProductID":1010566,"Amount":1}],"Outputs":[{"ProductID":270042,"Amount":5}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":269951,"Name":"Silo_Test","CycleTime":0,"Inputs":[{"ProductID":1010192,"Amount":1}],"Outputs":[{"ProductID":1010193,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":269851,"Name":"Grain Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010192,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":269850,"Name":"Grain Farm (GASOLINE TEST)","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010192,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":119028,"Name":"Fuel Station","CycleTime":15,"Inputs":[{"ProductID":1010566,"Amount":1}],"Outputs":[{"ProductID":270042,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":true,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":269840,"Name":"Fuel Station","CycleTime":15,"Inputs":[{"ProductID":1010566,"Amount":1}],"Outputs":[{"ProductID":270042,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":118571,"Name":"Fuel Station","CycleTime":15,"Inputs":[{"ProductID":1010566,"Amount":1}],"Outputs":[{"ProductID":270042,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112684,"Name":"Post Office","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":112693,"Amount":0}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":true,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112690,"Name":"Gas Mine","CycleTime":270,"Inputs":[],"Outputs":[{"ProductID":112706,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112668,"Name":"Pemmican Factory","CycleTime":60,"Inputs":[{"ProductID":112699,"Amount":1},{"ProductID":112694,"Amount":1}],"Outputs":[{"ProductID":112705,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112680,"Name":"Husky Sled Factory","CycleTime":60,"Inputs":[{"ProductID":112698,"Amount":1},{"ProductID":112704,"Amount":1}],"Outputs":[{"ProductID":112703,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112681,"Name":"Sled Frame Factory","CycleTime":60,"Inputs":[{"ProductID":112696,"Amount":1},{"ProductID":120008,"Amount":1}],"Outputs":[{"ProductID":112704,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112672,"Name":"Parka Factory","CycleTime":90,"Inputs":[{"ProductID":112695,"Amount":1},{"ProductID":112696,"Amount":1}],"Outputs":[{"ProductID":112700,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112679,"Name":"Oil Lamp Factory","CycleTime":60,"Inputs":[{"ProductID":112699,"Amount":1},{"ProductID":1010204,"Amount":1}],"Outputs":[{"ProductID":112702,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112675,"Name":"Sleeping Bag Factory","CycleTime":60,"Inputs":[{"ProductID":112696,"Amount":1},{"ProductID":112697,"Amount":1}],"Outputs":[{"ProductID":112701,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114704,"Name":"Sawmill","CycleTime":15,"Inputs":[{"ProductID":120008,"Amount":1}],"Outputs":[{"ProductID":1010196,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112674,"Name":"Seal Hunter","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":112696,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112666,"Name":"Whale Hunter","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":112699,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":116034,"Name":"Prime Hunting Cabin","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":1010209,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112682,"Name":"Husky Farm","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":112698,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112673,"Name":"Bear Hunter","CycleTime":90,"Inputs":[],"Outputs":[{"ProductID":112695,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112676,"Name":"Goose Farm","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":112697,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112667,"Name":"Caribou Hunter","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":112694,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":114703,"Name":"Lumberjack's Hut","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":120008,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101122,"Name":"Dynamite Shop","CycleTime":0,"Inputs":[],"Outputs":[],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":100806,"Name":"Edvard's Timber Yard","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":120008,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":100767,"Name":"Edvard's Church","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010350,"Amount":0}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010342,"Name":"Cigar Factory","CycleTime":0,"Inputs":[{"ProductID":1010252,"Amount":1},{"ProductID":1010242,"Amount":1}],"Outputs":[{"ProductID":1010259,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101266,"Name":"Poncho Darner","CycleTime":0,"Inputs":[{"ProductID":120036,"Amount":1}],"Outputs":[{"ProductID":120043,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010317,"Name":"Sugar Refinery","CycleTime":0,"Inputs":[{"ProductID":1010251,"Amount":1}],"Outputs":[{"ProductID":1010239,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101271,"Name":"Tortilla Maker","CycleTime":0,"Inputs":[{"ProductID":1010193,"Amount":1},{"ProductID":120034,"Amount":1}],"Outputs":[{"ProductID":120035,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101264,"Name":"Fried Plantain Kitchen","CycleTime":0,"Inputs":[{"ProductID":120042,"Amount":1},{"ProductID":120041,"Amount":1}],"Outputs":[{"ProductID":120033,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101252,"Name":"Coffee Roaster","CycleTime":0,"Inputs":[{"ProductID":120031,"Amount":1}],"Outputs":[{"ProductID":120032,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010341,"Name":"Chocolate Factory","CycleTime":0,"Inputs":[{"ProductID":1010254,"Amount":1},{"ProductID":1010239,"Amount":1}],"Outputs":[{"ProductID":1010258,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010340,"Name":"Rum Distillery","CycleTime":0,"Inputs":[{"ProductID":120008,"Amount":1},{"ProductID":1010251,"Amount":1}],"Outputs":[{"ProductID":1010257,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101273,"Name":"Bombín Weaver","CycleTime":0,"Inputs":[{"ProductID":1010240,"Amount":1},{"ProductID":120044,"Amount":1}],"Outputs":[{"ProductID":120037,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101415,"Name":"Felt Producer","CycleTime":0,"Inputs":[{"ProductID":120036,"Amount":1}],"Outputs":[{"ProductID":120044,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010318,"Name":"Cotton Mill","CycleTime":0,"Inputs":[{"ProductID":1010253,"Amount":1}],"Outputs":[{"ProductID":1010240,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101262,"Name":"Fish Oil Factory","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":120042,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010339,"Name":"Pearl Farm","CycleTime":90,"Inputs":[],"Outputs":[{"ProductID":1010256,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101272,"Name":"Alpaca Farm","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":120036,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":true,"CanHaveTractorBarn":false},
            {"ID":101270,"Name":"Corn Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":120034,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":101263,"Name":"Plantain Plantation","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":120041,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":101251,"Name":"Coffee Plantation","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":120031,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":1010333,"Name":"Caoutchouc Plantation","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010255,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":1010332,"Name":"Cocoa Plantation","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010254,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":1010331,"Name":"Cotton Plantation","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010253,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":1010330,"Name":"Tobacco Plantation","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":1010252,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":1010329,"Name":"Sugar Cane Plantation","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010251,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":1010364,"Name":"Members Club","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010355,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010362,"Name":"University","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010353,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010361,"Name":"Variety Theatre","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010352,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010359,"Name":"Church","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010350,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010365,"Name":"Bank","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010356,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010360,"Name":"School","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010351,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010358,"Name":"Pub","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010349,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101250,"Name":"Spectacle Factory","CycleTime":90,"Inputs":[{"ProductID":1010241,"Amount":1},{"ProductID":1010204,"Amount":1}],"Outputs":[{"ProductID":120030,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010328,"Name":"Jewellers","CycleTime":0,"Inputs":[{"ProductID":1010256,"Amount":1},{"ProductID":1010249,"Amount":1}],"Outputs":[{"ProductID":1010250,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010327,"Name":"Goldsmiths","CycleTime":60,"Inputs":[{"ProductID":1010226,"Amount":1},{"ProductID":1010233,"Amount":1}],"Outputs":[{"ProductID":1010249,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010326,"Name":"Gramophone Factory","CycleTime":120,"Inputs":[{"ProductID":1010242,"Amount":1},{"ProductID":1010204,"Amount":1}],"Outputs":[{"ProductID":1010248,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010284,"Name":"Sewing Machine Factory","CycleTime":0,"Inputs":[{"ProductID":120008,"Amount":1},{"ProductID":1010219,"Amount":1}],"Outputs":[{"ProductID":1010206,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010324,"Name":"Clockmakers","CycleTime":90,"Inputs":[{"ProductID":1010241,"Amount":1},{"ProductID":1010249,"Amount":1}],"Outputs":[{"ProductID":1010246,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010323,"Name":"Bicycle Factory","CycleTime":0,"Inputs":[{"ProductID":1010255,"Amount":1},{"ProductID":1010219,"Amount":1}],"Outputs":[{"ProductID":1010245,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010321,"Name":"Filament Factory","CycleTime":60,"Inputs":[{"ProductID":1010226,"Amount":1}],"Outputs":[{"ProductID":1010243,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010320,"Name":"Marquetry Workshop","CycleTime":60,"Inputs":[{"ProductID":120008,"Amount":1}],"Outputs":[{"ProductID":1010242,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010319,"Name":"Glassmakers","CycleTime":0,"Inputs":[{"ProductID":1010228,"Amount":1}],"Outputs":[{"ProductID":1010241,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010300,"Name":"Dynamite Factory","CycleTime":60,"Inputs":[{"ProductID":1010234,"Amount":1},{"ProductID":1010232,"Amount":1}],"Outputs":[{"ProductID":1010222,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010315,"Name":"Framework Knitters","CycleTime":0,"Inputs":[{"ProductID":1010197,"Amount":1}],"Outputs":[{"ProductID":1010237,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010314,"Name":"Malthouse","CycleTime":0,"Inputs":[{"ProductID":1010192,"Amount":1}],"Outputs":[{"ProductID":1010236,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010313,"Name":"Flour Mill","CycleTime":0,"Inputs":[{"ProductID":1010192,"Amount":1}],"Outputs":[{"ProductID":1010235,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010312,"Name":"Rendering Works","CycleTime":60,"Inputs":[{"ProductID":1010199,"Amount":1}],"Outputs":[{"ProductID":1010234,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010311,"Name":"Gold Mine","CycleTime":150,"Inputs":[],"Outputs":[{"ProductID":1010233,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010309,"Name":"Limestone Quarry","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010231,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010308,"Name":"Copper Mine","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010230,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010307,"Name":"Zinc Mine","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010229,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010305,"Name":"Iron Mine","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":1010227,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010304,"Name":"Coal Mine","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":1010226,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101331,"Name":"Oil Refinery","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":1010566,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010282,"Name":"Brass Smeltery","CycleTime":60,"Inputs":[{"ProductID":1010229,"Amount":1},{"ProductID":1010230,"Amount":1}],"Outputs":[{"ProductID":1010204,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010303,"Name":"Cab Assembly Line","CycleTime":60,"Inputs":[{"ProductID":1010211,"Amount":1},{"ProductID":1010224,"Amount":1}],"Outputs":[{"ProductID":1010225,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010302,"Name":"Motor Assembly Line","CycleTime":90,"Inputs":[{"ProductID":1010219,"Amount":1},{"ProductID":1010204,"Amount":1}],"Outputs":[{"ProductID":1010224,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010301,"Name":"Heavy Weapons Factory","CycleTime":120,"Inputs":[{"ProductID":1010219,"Amount":1},{"ProductID":1010222,"Amount":1}],"Outputs":[{"ProductID":1010223,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010299,"Name":"Weapon Factory","CycleTime":90,"Inputs":[{"ProductID":1010219,"Amount":1}],"Outputs":[{"ProductID":1010221,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010297,"Name":"Furnace","CycleTime":0,"Inputs":[{"ProductID":1010227,"Amount":1},{"ProductID":1010226,"Amount":1}],"Outputs":[{"ProductID":1010219,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010296,"Name":"Steelworks","CycleTime":45,"Inputs":[{"ProductID":1010219,"Amount":1}],"Outputs":[{"ProductID":1010218,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":100659,"Name":"Champagne Cellar","CycleTime":0,"Inputs":[{"ProductID":120014,"Amount":1},{"ProductID":1010241,"Amount":1}],"Outputs":[{"ProductID":120016,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010316,"Name":"Butcher's","CycleTime":60,"Inputs":[{"ProductID":1010199,"Amount":1}],"Outputs":[{"ProductID":1010238,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010294,"Name":"Schnapps Distillery","CycleTime":0,"Inputs":[{"ProductID":1010195,"Amount":1}],"Outputs":[{"ProductID":1010216,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010295,"Name":"Cannery","CycleTime":90,"Inputs":[{"ProductID":1010227,"Amount":1},{"ProductID":1010215,"Amount":1}],"Outputs":[{"ProductID":1010217,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010293,"Name":"Artisanal Kitchen","CycleTime":120,"Inputs":[{"ProductID":1010193,"Amount":1},{"ProductID":1010198,"Amount":1}],"Outputs":[{"ProductID":1010215,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010292,"Name":"Brewery","CycleTime":60,"Inputs":[{"ProductID":1010194,"Amount":1},{"ProductID":1010236,"Amount":1}],"Outputs":[{"ProductID":1010214,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010291,"Name":"Bakery","CycleTime":60,"Inputs":[{"ProductID":1010235,"Amount":1}],"Outputs":[{"ProductID":1010213,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010289,"Name":"Coachmakers","CycleTime":120,"Inputs":[{"ProductID":120008,"Amount":1},{"ProductID":1010255,"Amount":1}],"Outputs":[{"ProductID":1010211,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":100416,"Name":"Clay Pit","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010201,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010288,"Name":"Sailmakers","CycleTime":0,"Inputs":[{"ProductID":1010197,"Amount":1}],"Outputs":[{"ProductID":1010210,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010285,"Name":"Window-Makers","CycleTime":60,"Inputs":[{"ProductID":120008,"Amount":1},{"ProductID":1010241,"Amount":1}],"Outputs":[{"ProductID":1010207,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010286,"Name":"Light Bulb Factory","CycleTime":60,"Inputs":[{"ProductID":1010241,"Amount":1},{"ProductID":1010243,"Amount":1}],"Outputs":[{"ProductID":1010208,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010325,"Name":"Fur Dealer","CycleTime":0,"Inputs":[{"ProductID":1010209,"Amount":1},{"ProductID":1010240,"Amount":1}],"Outputs":[{"ProductID":1010247,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":100451,"Name":"Sawmill","CycleTime":15,"Inputs":[{"ProductID":120008,"Amount":1}],"Outputs":[{"ProductID":1010196,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010283,"Name":"Brick Factory","CycleTime":60,"Inputs":[{"ProductID":1010201,"Amount":1}],"Outputs":[{"ProductID":1010205,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010281,"Name":"Soap Factory","CycleTime":0,"Inputs":[{"ProductID":1010234,"Amount":1}],"Outputs":[{"ProductID":1010203,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010280,"Name":"Concrete Factory","CycleTime":60,"Inputs":[{"ProductID":1010231,"Amount":1},{"ProductID":1010219,"Amount":1}],"Outputs":[{"ProductID":1010202,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010560,"Name":"Sand Mine","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010228,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010310,"Name":"Saltpeter Works","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":1010232,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010278,"Name":"Fishery","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010200,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":100655,"Name":"Vineyard","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":120014,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":100654,"Name":"Red Pepper Farm","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":1010198,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":1010558,"Name":"Hunting Cabin","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010209,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010269,"Name":"Pig Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010199,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":true,"CanHaveTractorBarn":false},
            {"ID":1010267,"Name":"Sheep Farm","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010197,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":true,"CanHaveTractorBarn":false},
            {"ID":1010266,"Name":"Lumberjack's Hut","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":120008,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010265,"Name":"Potato Farm","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010195,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":1010264,"Name":"Hop Farm","CycleTime":90,"Inputs":[],"Outputs":[{"ProductID":1010194,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":1010263,"Name":"Cattle Farm","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":1010193,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":true,"CanHaveTractorBarn":false},
            {"ID":1010262,"Name":"Grain Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010192,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":true},
            {"ID":101259,"Name":"Pub","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010349,"Amount":0}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101258,"Name":"Church","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010350,"Amount":0}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101296,"Name":"Marquetry Workshop","CycleTime":60,"Inputs":[{"ProductID":120008,"Amount":1}],"Outputs":[{"ProductID":1010242,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101311,"Name":"Gold Mine","CycleTime":150,"Inputs":[],"Outputs":[{"ProductID":1010233,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":1010561,"Name":"Oil Refinery","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":1010566,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101268,"Name":"Brick Factory","CycleTime":60,"Inputs":[{"ProductID":1010201,"Amount":1}],"Outputs":[{"ProductID":1010205,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101267,"Name":"Clay Pit","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010201,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101265,"Name":"Sailmakers","CycleTime":0,"Inputs":[{"ProductID":1010197,"Amount":1}],"Outputs":[{"ProductID":1010210,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101261,"Name":"Sawmill","CycleTime":15,"Inputs":[{"ProductID":120008,"Amount":1}],"Outputs":[{"ProductID":1010196,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101303,"Name":"Saltpeter Works","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":1010232,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101269,"Name":"Cattle Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010193,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":101260,"Name":"Lumberjack's Hut","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":120008,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false},
            {"ID":112128,"Name":"Variety Theatre","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010352,"Amount":0}],"IsOldWorld":false,"IsNewWorld":false,"IsArctic":false,"IsEnbesan":false,"CanHaveSilo":false,"CanHaveTractorBarn":false}
        ];
    }

    _allFactories: FactoryRaw[]
    get AllFactories(): FactoryRaw[] {
        if (!this._allFactories) {
            var result = this.getRaw();
            // Hacking in a factory for electricity since it doesn't seem to count as a public service building in the game files
            result.push({ "ID":1, "Name":"Electricity", "CycleTime":0, "Inputs":[], "Outputs":[{ "ProductID":1010354, "Amount":0 }], "IsOldWorld":true, "IsNewWorld":false, IsArctic: false, IsEnbesan: false, "CanHaveSilo":false,"CanHaveTractorBarn":false });
            result.push({ "ID":2, "Name":"Chapel", "CycleTime":0, "Inputs":[], "Outputs":[{ "ProductID":120050, "Amount":0 }], "IsOldWorld":true, "IsNewWorld":false, IsArctic: false, IsEnbesan: false, "CanHaveSilo":false,"CanHaveTractorBarn":false  });
            result.push({ "ID":3, "Name":"Boxing Arena", "CycleTime":0, "Inputs":[], "Outputs":[{ "ProductID":1010348, "Amount":0 }], "IsOldWorld":false, "IsNewWorld":true, IsArctic: false, IsEnbesan: false, "CanHaveSilo":false,"CanHaveTractorBarn":false });

            // Manually adding factory entries for silos and tractor barns
            // Grain silo inputs one grain every 300 seconds
            result.push({ "ID":101, "Name":"Grain Silo", "CycleTime":300, "Inputs":[{ "ProductID":1010192, "Amount":1 }], "Outputs":[{ "ProductID": 1, "Amount":5 }], "IsOldWorld": true, "IsNewWorld": false, IsArctic: false, IsEnbesan: false, "CanHaveSilo":false,"CanHaveTractorBarn":false });
            // Corn silo inputs one corn every 300 seconds
            result.push({ "ID":102, "Name":"Corn Silo", "CycleTime":300, "Inputs":[{ "ProductID":120034, "Amount":1 }], "Outputs":[{ "ProductID": 1, "Amount":5 }], "IsOldWorld": false, "IsNewWorld": true, IsArctic: false, IsEnbesan: false, "CanHaveSilo":false,"CanHaveTractorBarn":false });
            // Tractor barn inputs one fuel every 300 seconds
            result.push({ "ID":103, "Name":"Tractor Barn", "CycleTime":300, "Inputs":[{ "ProductID":270042, "Amount":1 }], "Outputs":[{ "ProductID": 2, "Amount":5 }], "IsOldWorld": true, "IsNewWorld": true, IsArctic: false, IsEnbesan: true, "CanHaveSilo":false,"CanHaveTractorBarn":false });
            // Teff silo inputs one teff every 300 seconds
            result.push({ "ID":104, "Name":"Teff Silo", "CycleTime":300, "Inputs":[{ "ProductID":114367, "Amount":1 }], "Outputs":[{ "ProductID": 1, "Amount":5 }], "IsOldWorld": false, "IsNewWorld": false, IsArctic: false, IsEnbesan: true, "CanHaveSilo":false,"CanHaveTractorBarn":false });

            this._allFactories = result;
        }

        return this._allFactories;
    }
}


class FactoryRaw {
    ID: number;
    Name: string;
    CycleTime: number;
    Inputs: FactoryIngredient[];
    Outputs: FactoryIngredient[];
    IsOldWorld: boolean;
    IsNewWorld: boolean;
    IsArctic: boolean;
    IsEnbesan: boolean;
    CanHaveSilo: boolean;
    CanHaveTractorBarn: boolean;
}

export class Factory extends FactoryRaw {
    constructor(raw: FactoryRaw, group: FactoryGrouping) {
        super();
        this.ID = raw.ID;
        this.Name = raw.Name;
        this.CycleTime = raw.CycleTime;
        this.Inputs = raw.Inputs;
        this.Outputs = raw.Outputs;
        this.IsOldWorld = raw.IsOldWorld;
        this.IsNewWorld = raw.IsNewWorld;
        this.IsArctic = raw.IsArctic;
        this.IsEnbesan = raw.IsEnbesan;
        this.CanHaveSilo = raw.CanHaveSilo;
        this.CanHaveTractorBarn = raw.CanHaveTractorBarn;
        this.FactoryGrouping = group;
    }

    ChildFactories: Factory[] = []
    ParentFactory?: Factory = null
    FactoryGrouping: FactoryGrouping;

    get ParentFactoryOrThisRecursive(): Factory {
        if (!this.ParentFactory) {
            return this;
        }

        return this.ParentFactory.ParentFactoryOrThisRecursive;
    }

    get RequiredCountIsUserDefined(): boolean {
        return this.FactoryGrouping === 'Building Material' && !this.ParentFactory;
    }
    
    _enabled: boolean = false
    get Enabled(): boolean {
        return this._enabled;
    }

    set Enabled(newVal: boolean) {
        this._enabled = newVal;
        for(var i = 0; i < this.ChildFactories.length; i++) {
            this.ChildFactories[i].Enabled = this.Enabled;
        }
    }

    GetRequiredCount(island: Island): number {
        if (this.Outputs[0].Amount === 0) {
            // Public service building
            return 0;
        }
        
        let amountRequiredPerMinute = 0;
        const outputProductID = this.Outputs[0].ProductID;

        if (this.ID === 101 || this.ID === 102 || this.ID == 104) {
            // Special case - Count number of farms using silos
            const keys = Object.keys(island.FactoryCounts) as any as number[];
            for (var i = 0; i < keys.length; i++) {
                if (island.FactoryCounts[keys[i]].UseSilo) {
                    amountRequiredPerMinute += island.FactoryCounts[keys[i]].BuiltCount;
                }          
            }
        }
        else if (this.ID == 103) {
            // Special case - Count number of farms using tractor barns
            const keys = Object.keys(island.FactoryCounts) as any as number[];
            for (var i = 0; i < keys.length; i++) {
                if (island.FactoryCounts[keys[i]].UseTractorBarn) {
                    amountRequiredPerMinute += island.FactoryCounts[keys[i]].BuiltCount;
                }                  
            }
        }
        // Default case - Calculate from population needs
        else {
            if (!this.Enabled) {
                return 0;
            }
            
            if (this.RequiredCountIsUserDefined) {
                // For building materials, required count is just the value that the user inputs into the 'built' column
                return island.FactoryCounts[this.ID].BuiltCount * island.FactoryCounts[this.ID].Productivity / 100;
            }
            
            for (var i = 0; i < island.PopulationLevels.length; i++) {
                amountRequiredPerMinute += island.PopulationLevels[i].GetProductRequirement(outputProductID);
            }
            
            // Population requirements appear to be in tons per second, so multiply by 60
            amountRequiredPerMinute *= 60;
        }
        
        const cycleTime = this.CycleTime > 0 ? this.CycleTime : 30;            

        let requiredFactoriesFromParent = 0;
        if (this.ParentFactory) {
            let parentInput = this.ParentFactory.Inputs.filter(i => i.ProductID === outputProductID)[0];
            if (parentInput) {
                const parentRequiredCountUnmodified = this.ParentFactory.GetRequiredCount(island) - island.FactoryCounts[this.ParentFactory.ID].TradeBalance;              
                const parentCycleTime = this.ParentFactory.CycleTime > 0 ? this.ParentFactory.CycleTime : 30;                
                const childParentFactoryRatio = parentInput.Amount / this.Outputs[0].Amount * cycleTime / parentCycleTime;
                requiredFactoriesFromParent = parentRequiredCountUnmodified * childParentFactoryRatio;
            }
        }
        
        let producedPerMinute = this.Outputs[0].Amount * 60 / cycleTime;

        return Math.max((amountRequiredPerMinute / producedPerMinute + requiredFactoriesFromParent), 0);
    }

    GetSatisfactionClass(island: Island): string {
        let result = 'factory';

        if (this.Outputs[0].Amount === 0) {
            result = result + ' publicService';

            if (this.Enabled) {
                result = result + ' satisfied';
            }

            return result;
        }
        
        if (!this.Enabled) {
            return result;
        }

        const required = island.GetRequiredCountByFactoryID(this.ID);
        let satisfaction = island.FactoryCounts[this.ID].BuiltCount + island.FactoryCounts[this.ID].TradeBalance;

        if(satisfaction >= required) {
            result = result + ' satisfied';
        }
        else if (required - satisfaction < 0.5) {
            result = result + ' slightlyUnsatisfied';
        }
        else {
            result = result + ' unsatisfied';
        }

        return result;
    }

    IsInUse(island: Island) { 
        let relevantFactory = this as Factory;
        while (relevantFactory.ParentFactory) {
            relevantFactory = relevantFactory.ParentFactory;
        }

        // Does the population demand it?
        if (
            island.PopulationLevels.filter(p => 
                p.Inputs.filter(input => input.ProductID === relevantFactory.Outputs[0].ProductID).length > 0
                && (p.HouseCount > 0 || p.ShowUnused)            
            ).length > 0
        ) {
            return true;
        }

        // Are any required?
        if (this.GetRequiredCount(island)) {
            return true;
        }

        // Special sections enabled?
        if (this.FactoryGrouping === 'Export' && island.ShowExports) {
            return true;
        }
        if (this.FactoryGrouping === 'Building Material' && island.ShowBuildingMaterials) {
            return true;
        }

        return false;
    }

    Save(): FactorySaveInfo {
        return {
            FactoryID: this.ID,
            ParentFactoryID: this.ParentFactory ? this.ParentFactory.ID : null,
            Enabled: this.Enabled
        };
    }
}

export class FactoryIngredient {
    ProductID: number
    Amount: number
}

export class FactorySaveInfo {
    FactoryID: number;
    ParentFactoryID?: number;
    Enabled: boolean;
    
    // Deprecated fields from before factory counts were combined per island. Included for save backwards-compatibility.
    UseSilo?: boolean;
    UseTractorBarn?: boolean;
    BuiltCount?: number;
    TradeBalance?: number;
    Productivity?: number;
}

export type FactoryGrouping = 'Regular' | 'Building Material' | 'Export';