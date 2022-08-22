import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FilterService } from 'app/filter.service';
import { Accomodation } from 'app/models/Accomodation.model';
import { Location } from 'app/models/location.model';
import { StayVacationService } from 'app/StayVacation.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selectedlocation: number | undefined;
  filterValues !: NgForm;
 

  
  type: number | undefined;
  constructor(private stayVacationService:StayVacationService,private filterService:FilterService) { }
  
  
    locations:Location[]=[];
    allLocations:Location[]=[];
    allAccommodations:Accomodation[]=[];
    types = [
      { id: 1, name: 'Suite' },
      { id: 2, name: 'Room' },
      { id: 3, name: 'MobileHome' },
      { id: 4, name: 'Apartment' },
      
  ];
  public async onFilter(form :NgForm){
    this.filterValues=form.value;
    console.log(this.filterValues)
      this.filterService.appliedFilters.next(this.filterValues);
    //console.log(this.filterService.appliedFilters)
  }
  getLocations(){
    this.stayVacationService.fetchLocations().subscribe(res=>{
      this.locations=res;
      console.log(res)
    })
  }
  getAccommodations(){
    this.stayVacationService.fetchAccommodations().subscribe(resAcc=>{
      this.allAccommodations=resAcc;
    })
  }
  ngOnInit(): void {
    this.getLocations();
    this.getAccommodations();
  }
 
}
