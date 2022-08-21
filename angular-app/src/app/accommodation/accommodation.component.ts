import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Accomodation} from '../models/Accomodation.model';
import { map } from 'rxjs/operators';
import { StayVacationService } from 'app/StayVacation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from 'app/filter.service';
@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})


export class AccommodationComponent implements OnInit {
  accommodations:Accomodation[] = [];
  isLoading=false;


  constructor(private router:Router,private route:ActivatedRoute,private stayVacationService:StayVacationService,private filterService:FilterService) { }
  onItemRecived(item: Accomodation){
    console.log(item)
  }
  numberOfCol(len:Accomodation[],until:number){
    const num=len.slice(0,until)
    return num
  }  
  onClicked(item:Accomodation){
    this.router.navigate(['/accommodation',item.id],{relativeTo:this.route});
  }
  counter(i:number){
    return new Array(i);
  }

  ngOnInit(){
    this.getData();
    console.log(this.accommodations)
    this.filterService.appliedFilters.subscribe(filterValues=>{
      
      this.isLoading=true;
      this.stayVacationService.fetchAccommodations().subscribe(res=>{
        this.isLoading=false;
        if(filterValues.personCount!=="" || filterValues.accommodationType!==""){
          this.accommodations=res.filter(res=>{
          return res.capacity===filterValues.personCount || res.type===filterValues.accommodationType });
          console.log(this.accommodations);
        }
        else{
          this.accommodations=res;
        }
        
      })
    })
  }
  private getData(){
    
    this.isLoading=true;
    this.stayVacationService.fetchAccommodations().subscribe(accommodations=>{
      this.isLoading=false;
      this.accommodations=accommodations;
      console.log(accommodations);
    })
  }

}
