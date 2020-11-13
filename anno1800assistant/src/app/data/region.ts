import { Injectable } from '@angular/core';
import { PopulationService } from './populations';

export type Region = 'OldWorld' | 'NewWorld' | 'Arctic' | 'Enbasa';

@Injectable()
export class RegionService {
    static regionFriendlyNameMap: { label: string, value: Region }[] = [
        { label: 'Old World', value: 'OldWorld' },
        { label: 'New World', value: 'NewWorld' },
        { label: 'Arctic', value: 'Arctic' },
        { label: 'Enbasa', value: 'Enbasa' }
    ];

    static regionColorMap: { [key in Region]: string } = {
        'OldWorld': '#ffeec4',
        'NewWorld': '#75e069',
        'Arctic': '#ededed',
        'Enbasa': '#ffd336',
    }

    constructor(private populationService: PopulationService) {
        
    }
}