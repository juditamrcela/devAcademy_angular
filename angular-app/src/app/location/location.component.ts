import { ContentObserver } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from 'app/filter.service';
import { Accomodation } from 'app/models/Accomodation.model';
import { StayVacationService } from 'app/StayVacation.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  isLoading=false;
  accommodations:Accomodation[]=[];
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router,private stayVacationService:StayVacationService,private filterService:FilterService) { }
  onClicked(item:Accomodation){
    this.router.navigate(['/accommodation',item.id],{relativeTo:this.route});
  }
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.isLoading=true;
    const locationId=this.route.snapshot.queryParams;
    console.log(locationId)
    this.stayVacationService.fetchAccommodationLocation(locationId).subscribe(res=>{
      this.isLoading=false;
      this.accommodations=res
      console.log(res)

    })

    
      
  }

}
