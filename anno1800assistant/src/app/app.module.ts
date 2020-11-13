import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PopulationService } from 'src/app/data/populations';
import { RegionService } from './data/region';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PopulationService,
    RegionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
