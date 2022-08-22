import { Component, OnInit ,Input} from '@angular/core';
import {Location } from '../models/location.model';
import {ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StayVacationService } from 'app/StayVacation.service';
import { NgForm } from '@angular/forms';
import { FilterService } from 'app/filter.service';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  
  locations:Location[]=[];
  isLoading=false;
  // locationsItem: Location[] = [ 
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
  
  
  onItemRecived(event: Location){
    
    console.log(event)
  }
  onClicked(item:Location){
    this.router.navigate(['/location'],{queryParams:{locationId:item.id}});
  }
  numberOfRows(len:Location[],until:number){
    const num=len.slice(0,until)
    return num
  } 
  counter(i:number){
    return new Array(i);
  }
  constructor(private router:Router,
    private route:ActivatedRoute,private http:HttpClient,private stayVacationService:StayVacationService,private filterService:FilterService) { }

  public async ngOnInit() {
    
    this.getData()
    this.filterService.appliedFilters.subscribe(filterValues=>{
      this.isLoading=true;
      this.stayVacationService.fetchLocations().subscribe(res=>{
        this.isLoading=false;
        this.locations=res.filter(values=>{return values.id===filterValues.location});
        console.log(this.locations);
    })
    })
  }
  private getData(){
    this.isLoading=true;
    this.stayVacationService.fetchLocations().subscribe(res=>{
      this.isLoading=false;
      this.locations=res;
      console.log(res);
    })
  }

}
