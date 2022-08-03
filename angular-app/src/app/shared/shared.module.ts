import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationBoxComponent } from './location-box/location-box.component';
import { AccomodationBoxComponent } from './accomodation-box/accomodation-box.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    LocationBoxComponent,
    AccomodationBoxComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule
  ],
  exports:[ 
    LocationBoxComponent,
    AccomodationBoxComponent,
    FilterComponent,
    CommonModule,
    FormsModule
  ]
    
})
export class SharedModule { }
