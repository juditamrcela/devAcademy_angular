import { Component, OnInit } from '@angular/core';
import { StayVacationService } from 'app/StayVacation.service';
import { Reservation } from 'app/models/Reservation.model';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {

  constructor(private stayVacationService:StayVacationService) { }
  isLoading=false;
  reservations:Reservation[]=[];
  ngOnInit(): void {
    this.getData();
  }

  private getData(){
    this.isLoading=true;
    this.stayVacationService.fetchReservations().subscribe(res=>{
      this.isLoading=false;
      this.reservations=res;
      console.log(res);
      console.log(this.reservations)

    })
  }

}
