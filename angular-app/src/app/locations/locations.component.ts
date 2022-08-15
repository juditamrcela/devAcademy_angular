import { Component, OnInit } from '@angular/core';
import {Location } from '../models/location.model';
import {ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [ 
    { 
    id: "0f29d778-0592-43cb-a21c-a4aa6a4c7997", 
    name: "Vukovar", 
    postalCode: 32000,
    imageUrl: "https://www.dw.com/hr/vukovar-grad-heroj-ali-i-sredstvo-za-ideolo%C5%A1ko-dijeljenje-hrvatske/a-59853062" }, 
    { 
    id: "9544585e-bd71-4a15-9591-67ecc8374e5d", 
    name: "Zagreb", 
    postalCode: 10000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Zagreb_%2829255640143%29.jpg/420px-Zagreb_%2829255640143%29.jpg",}, 
    { 
    id: "e80b2420-69da-4426-83b5-9acdde15a32c", 
    name: "Pozega", 
    postalCode: 34000,
    imageUrl: "https://www.pozega.hr/images/stranica/rotate/108.jpg"} 
  ]
  
  
  onItemRecived(event: Location){
    
    console.log(event)
  }
  onClicked(){
    this.router.navigate(['/locations','id'],{relativeTo:this.route});
  }
  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
