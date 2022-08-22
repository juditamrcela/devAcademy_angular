import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { StayVacationService } from 'app/StayVacation.service';

import { Accomodation } from 'app/models/Accomodation.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-my-accommodation-form',
  templateUrl: './my-accommodation-form.component.html',
  styleUrls: ['./my-accommodation-form.component.css']
})
export class MyAccommodationFormComponent implements OnInit {

  @ViewChild('f') accommodationForm: NgForm | undefined;
  public checked : boolean=false;
  private id : string ="";
  isAddMode!:boolean;
  accommodation!:Accomodation;
  isLoading=false;
  constructor(private stayVacationService:StayVacationService,private route:ActivatedRoute,private router:Router) { }

    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.isAddMode=!this.id;
      if(this.isAddMode!==true){
        this.getAccommodationById();
        this.accommodationForm?.setValue({
          title:this.accommodation.title,
          sDescription:this.accommodation.subtitle,
          lDescription:this.accommodation.description,
          categorization:this.accommodation.categorization,
          accommodationType:this.accommodation.type,
          capacity:this.accommodation.capacity,
          price:this.accommodation.price,
          location:this.accommodation.location?.name,
          posatalCode:this.accommodation.location?.postalCode,
          imageUrl:this.accommodation.imageUrl,
          freeCancel:this.accommodation.freeCancelation

        })
      }
    }
    type : number | undefined;
    getAccommodationById(){
      this.stayVacationService.fetchAccommodation(this.id).subscribe(res=>{
        this.accommodation=res;
        console.log(res)
      })
    }
    types = [
      { id: 1, name: 'Suite' },
      { id: 2, name: 'Room' },
      { id: 3, name: 'MobileHome' },
      { id: 4, name: 'Apartment' },
    ];
  
    onChange($event:MatSlideToggleChange) {
      this.checked=$event.checked;

    }
    onSubmit(form:NgForm){
      this.isLoading=true;
      if(this.isAddMode){
        this.onAddItem(form);
      }
      else{
        this.updateAccommodation(form)
      }


    }
     private onAddItem(form :NgForm){
      const value=form.value;
      console.log(value)
      this.stayVacationService.createAndStoreAccommodation(value).subscribe(
        {
          next:()=>{
            this.router.navigate(['../'],{relativeTo:this.route});
          }
        }
      )
      
    }
    private updateAccommodation(form:NgForm){
      this.stayVacationService.updateAccommodation(this.id,form.value)
      .subscribe({
        next:()=>{
          this.router.navigate(['../../'],{relativeTo:this.route});
        }
      })
    }
    
  

  
  

}


