import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StayVacationService } from 'app/StayVacation.service';
import { Accomodation } from 'app/models/Accomodation.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-accomodation-details',
  templateUrl: './accomodation-details.component.html',
  styleUrls: ['./accomodation-details.component.css']
})
export class AccomodationDetailsComponent implements OnInit {
  accommodation:any;
  //private accommodationId:string="" as string;
  isLoading=false;
  private getData(){
    this.isLoading=true;
    const accommodationId=this.route.snapshot.params['id'];
    this.stayVacationService.fetchAccommodation(accommodationId).subscribe(res=>{
      this.accommodation=res;
      console.log(res);
      this.isLoading=false;
    });
  }
  constructor(private http:HttpClient,private stayVacationService:StayVacationService,private route:ActivatedRoute,private router:Router) { }
  counter(i:number){
    return new Array(i);
  }
  ngOnInit(): void {
    this.getData()
    
    
  }
  OnClick(id:string){
    this.router.navigate(['/bookPlace',id],{relativeTo:this.route});
  }
  

}
