import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationBoxComponent } from './location-box/location-box.component';
import { AccomodationBoxComponent } from './accomodation-box/accomodation-box.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LocationBoxComponent,
    AccomodationBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ 
    LocationBoxComponent,
    AccomodationBoxComponent,
    CommonModule,
    FormsModule
  ]
    
})
export class SharedModule { }
