import { Component, OnInit } from '@angular/core';
import {Location } from '../models/location.model';
import {ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StayVacationService } from 'app/StayVacation.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-all-locations',
  templateUrl: './all-locations.component.html',
  styleUrls: ['./all-locations.component.css']
})
export class AllLocationsComponent implements OnInit {

 
  selectedlocation: string | undefined;
  isLoading=false;
  locations=[
    { id: 1, name: 'Zagreb' },
    { id: 2, name: 'Split' },
    { id: 3, name: 'Dubrovnik' },
    { id: 4, name: 'Pula' },
  ]
  allLocations:Location[]=[];
  selectList:Location[]=[];

  constructor(private router: Router,
    private route:ActivatedRoute,private http:HttpClient,private stayVacationService:StayVacationService) { }
  // allLocations: Location[] = [ 
  //   { 
  //   id: "0f29d778-0592-43cb-a21c-a4aa6a4c7997", 
  //   name: "Vukovar", 
  //   postalCode: 32000,
  //   imageUrl: "https://www.dw.com/hr/vukovar-grad-heroj-ali-i-sredstvo-za-ideolo%C5%A1ko-dijeljenje-hrvatske/a-59853062" }, 
  //   { 
  //   id: "9544585e-bd71-4a15-9591-67ecc8374e5d", 
  //   name: "Zagreb", 
  //   postalCode: 10000,
  //   imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Zagreb_%2829255640143%29.jpg/420px-Zagreb_%2829255640143%29.jpg",}, 
  //   { 
  //   id: "e80b2420-69da-4426-83b5-9acdde15a32c", 
  //   name: "Pozega", 
  //   postalCode: 34000,
  //   imageUrl: "https://www.pozega.hr/images/stranica/rotate/108.jpg"} 
  // ]

  getData(){
    this.isLoading=true;
    this.stayVacationService.fetchLocations().subscribe(locations=>{
      this.allLocations=locations;
      this.selectList=locations
      this.isLoading=false;
    })
  }
 
  ngOnInit(): void {
    this.getData();
  }
  onClickedLocation(emit:Location){

    this.router.navigate(['/location'],{queryParams:{locationId:emit.id}});
  }
  onLocationSelect(form:NgForm){
    console.log(form.value.location)
    this.stayVacationService.fetchLocations().subscribe(res=>{
      this.allLocations=res.filter((l)=>l.id===form.value.location)
      console.log(this.allLocations)
    })
  }


}
