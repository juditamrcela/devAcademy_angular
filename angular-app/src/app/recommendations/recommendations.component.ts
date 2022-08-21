import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StayVacationService } from 'app/StayVacation.service';
import { Accomodation } from 'app/models/Accomodation.model';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute,private stayVacationService:StayVacationService) { }
  isLoading=false;
  accommodations:Accomodation[]=[];
  ngOnInit(): void {
    this.getData()
  }
  onClicked(item:Accomodation){
    this.router.navigate(['/accommodation',item.id],{relativeTo:this.route});
  }
  getData(){
    this.isLoading=true;
    this.stayVacationService.fetchReccommendations().subscribe(res=>{
      this.accommodations=res;
      this.isLoading=false;
      console.log(res);


    })
  }

}
