import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Accomodation } from 'app/models/Accomodation.model';
import { Reservation } from 'app/models/Reservation.model';
import { StayVacationService } from 'app/StayVacation.service';
import { CreateReservationConfirmationDialogComponent } from 'app/shared/create-reservation-confirmation-dialog/create-reservation-confirmation-dialog.component';

@Component({
  selector: 'app-book-place-form',
  templateUrl: './book-place-form.component.html',
  styleUrls: ['./book-place-form.component.css']
})

export class BookPlaceFormComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private stayVacationService:StayVacationService,private dialog:MatDialog) { }
  private id!:string;
  accommodation!:Accomodation;
  reservation!:Reservation;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getAccommodationById();
  }
  counter(i:number){
    return new Array(i);
  }
  getAccommodationById(){
    this.stayVacationService.fetchAccommodation(this.id).subscribe(res=>{
      this.accommodation=res;
      console.log(res);
    })
  }
  
  onSubmit(form:NgForm){
    const dialogRef=this.dialog.open(CreateReservationConfirmationDialogComponent,{
      width:'600px',
      disableClose:true,
      data:{
          
          accommodationType:this.accommodation.type,
          accommodationName: this.accommodation.title,
          personCount:form.value.personCount,
          checkIn:form.value.checkIn,
          checkOut:form.value.checkOut,
          price:this.accommodation.price,
          location:this.accommodation.location?.name,
          

      }
    
    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res)
      if(res){
        this.stayVacationService.createAndStoreReservation(form.value)
      }
    })
  }




}
