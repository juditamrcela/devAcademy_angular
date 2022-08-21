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
import {MatIconModule} from '@angular/material/icon';
import { FilterPipe } from './filter/filter.pipe';
import { FiltersComponent } from './filters/filters.component';
import { ReservationBoxComponent } from './reservation-box/reservation-box.component';
import { DeleteConfirmationDailogComponent } from './delete-confirmation-dailog/delete-confirmation-dailog.component'
import {MatDialogModule} from '@angular/material/dialog';
import { CreateReservationConfirmationDialogComponent } from './create-reservation-confirmation-dialog/create-reservation-confirmation-dialog.component'
@NgModule({
  declarations: [
    LocationBoxComponent,
    AccomodationBoxComponent,
    FilterComponent,
    FilterPipe,
    FiltersComponent,
    ReservationBoxComponent,
    DeleteConfirmationDailogComponent,
    CreateReservationConfirmationDialogComponent
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
    MatIconModule,
    MatDialogModule
  ],
  exports:[ 
    LocationBoxComponent,
    AccomodationBoxComponent,
    FilterComponent,
    FiltersComponent,
    ReservationBoxComponent,
    DeleteConfirmationDailogComponent,
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    FilterPipe,
    CreateReservationConfirmationDialogComponent

  ],
  entryComponents:[MatDialogModule]
    
})
export class SharedModule { }
