import { Injectable } from '@angular/core';
import { PopulationService } from './populations';

export type Region = 'OldWorld' | 'NewWorld' | 'Arctic' | 'Enbesa';

@Injectable()
export class RegionService {
    static regionFriendlyNameMap: { label: string, value: Region }[] = [
        { label: 'Old World', value: 'OldWorld' },
        { label: 'New World', value: 'NewWorld' },
        { label: 'Arctic', value: 'Arctic' },
        { label: 'Enbesa', value: 'Enbesa' }
    ];

    static regionColorMap: { [key in Region]: string } = {
        'OldWorld': '#ffeec4',
        'NewWorld': '#75e069',
        'Arctic': '#ededed',
        'Enbesa': '#ffd336',
    }

    constructor(private populationService: PopulationService) {
        
    }

    static regionFactories: { [key in Region ]: number[] } = {
        'OldWorld': [
            // Farmers
            1010278, // Fishery    
            1010294, // Schnapps
            1010315, // Knitter
            
            // Workers
            1010316, // Sausages
            1010291, // Bread
            1010281, // Soap
            1010292, // Beer
            1010360, // School
            
            // Artisans
            1010295, // Canned Food
            1010284, // Sewing Machines
            1010340, // Rum
            1010325, // Fur Coats
            1010362, // University
            
            // Engineers
            101250,  // Glasses
            1010323, // High Wheelers
            1,       // Electricity
            101252,  // Coffee
            1010324, // Pocket Watches
            1010286, // Light Bulbs
            1010365, // Bank
            
            // Investors
            100659,  // Champagne
            1010342, // Cigars
            1010364, // Club House
            1010341, // Chocolate
            1010328, // Jewelry
            1010326, // Gramophones
            1010303, // Steam Carriages

            // Scholars
            118733,  // Bootmaker
            118734,  // Tailor's Shop
            101273,  // Bowler Hats
            114468,  // Tea Spicer
            114471,  // Wat Kitchen
            114469,  // Tapestry Looms
            118735,  // Telephone Manufacturer
            114472,  // Pipe Maker


        ],
        'NewWorld': [            
            // Jornaleros
            101264,  // Fried Plantains
            1010340, // Rum
            101266,  // Ponchos
            2,       // Chapel
            
            // Obreros
            101271,  // Tortillas
            101252,  // Coffee
            3,       // Boxing Arena
            101273,  // Bowler Hats
            1010292, // Beer
            1010284, // Sewing Machines
            1010342, // Cigars
        ],
        'Arctic': [
            // Explorers
            112668,  // Pemmican
            112675,  // Sleeping Bag Factory
            112679,  // Oil Lamp Factory
            1010294, // Schnapps Distillery

            // Technicians
            1010295, // Cannery
            112672,  // Parka Factory
            112680,  // Husky Sled Factory
            101252,  // Coffee Roaster
        ],
        'Enbesa': [
            // Shepherds
            114456, // Goat Farm
            114466, // Embroiderer
            114519, // Musician's Court
            114444, // Dry-House
            114468, // Tea Spicer
            
            // Elders
            118725, // Ceramics Workshop
            114469, // Tapestry Looms
            114471, // Wat Kitchen
            114472, // Pipe Maker
            114470, // Luminer
            101250, // Spectacle Factory
            114464, // Lanternsmith
        ]
    };

    // Factories that are not consumed by the population in the region, but are still useful to calculate due to exports
    static regionExports: { [key in Region]: number[] } = {
        'OldWorld': [],
        'NewWorld': [
            1010333, // Caoutchouc Plantation
            1010339, // Pearl Farm
            101311,  // Gold Mine
        ],
        'Arctic': [],
        'Enbesa': [],
    }

    // Buliding materials chains that it may be useful to track (to account for lumberjack huts, furnaces, glassmakers, etc. being used up for consumer goods and building materials at the same time)
    static regionBuildingMaterials: { [key in Region]: number[] } = {
        'OldWorld': [
            100451,  // Lumberjack hut
            1010296, // Steelworks
            1010285, // Window Maker
            1010280, // Concrete Factory
        ],
        'NewWorld': [
            101261,  // Lumberjack hut
        ],
        'Arctic': [],
        'Enbesa': [],
    }
}