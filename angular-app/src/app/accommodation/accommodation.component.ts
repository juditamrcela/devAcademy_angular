import { Component, OnInit } from '@angular/core';
import {Accomodation} from '../models/Accomodation.model';
@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})


export class AccommodationComponent implements OnInit {

  accomodationItem:Accomodation={
    
  "id": "64781283645196418469",
  "title" : "Casa Krystal",
  "subtitle" : "Crystal clear",
  "type" : 1,
  "description" : "Diamond description",
  "imageUrl" : "https://i.pinimg.com/originals/5c/e6/f5/5ce6f52c984205b63bed4570c61e41a6.jpg",
  "price" : 105,
  "categorization" : 4,
  "freeCancelation" : false,
  "personCount" : 4,
  "locationId" : "9544585e-bd71-4a15-9591-67ecc8374e5d"
}
onItemRecived(item: Accomodation){
  console.log(item)
}
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
