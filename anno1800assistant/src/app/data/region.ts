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
}