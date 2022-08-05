import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationBoxComponent } from './location-box/location-box.component';
import { AccomodationBoxComponent } from './accomodation-box/accomodation-box.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    LocationBoxComponent,
    AccomodationBoxComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
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
