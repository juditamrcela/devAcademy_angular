import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Reservation } from 'app/models/Reservation.model';

@Component({
  selector: 'app-reservation-box',
  templateUrl: './reservation-box.component.html',
  styleUrls: ['./reservation-box.component.css']
})
export class ReservationBoxComponent implements OnInit {
  @Input() reservationInput !: Reservation
  @Output() reservationOutput =new  EventEmitter<Reservation>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.reservationInput)
  }
  counter(i:number){
    return new Array(i);
  }
  send(){
      this.reservationOutput.emit(this.reservationInput);
      
  }

}
