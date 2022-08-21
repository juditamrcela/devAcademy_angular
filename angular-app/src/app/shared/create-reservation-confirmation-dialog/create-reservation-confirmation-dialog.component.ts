import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reservation } from 'app/models/Reservation.model';
@Component({
  selector: 'app-create-reservation-confirmation-dialog',
  templateUrl: './create-reservation-confirmation-dialog.component.html',
  styleUrls: ['./create-reservation-confirmation-dialog.component.css']
})
export class CreateReservationConfirmationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  totalEur(accommodationPrice:number,accommodationCheckIn:Date,accommodationCheckOut:Date){
    const totalDays=Math.abs(accommodationCheckOut.getDate()-accommodationCheckIn.getDate());
    console.log(accommodationCheckIn.valueOf())
    return totalDays*accommodationPrice;
  }

}
