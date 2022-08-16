import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import {Accomodation} from '../models/Accomodation.model';
@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})


export class AccommodationComponent implements OnInit {

  accomodationItem:Accomodation[]=[{
    
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
  "locationID" : "9544585e-bd71-4a15-9591-67ecc8374e5d"
},
{
  "id": "28536d76-65e3-4be1-b6e2-89d04a915582",
  "title": "Best hotel in Zagreb",
  "subtitle": "Zagreb Hilton",
  "description": "null",
  "type": 2,
  "categorization": 3,
  "personCount": 4,
  "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263835412.jpg?k=e584b150fe73dbf6a070ba957dfaad5e7a2b6d269ae90fbe7899e8bf537a7f4a&o=&hp=1",
  "freeCancelation": true,
  "price": 130,
  "locationID": "e80b2420-69da-4426-83b5-9acdde15a32c"
},
{
  "id": "320716f5-2042-4310-9276-690fd8c7f1a3",
  "title": "Ibis Resort since 1999",
  "subtitle": "Zagreb Ibis",
  "description": "null",
  "type": 0,
  "categorization": 3,
  "personCount": 4,
  "imageUrl": "https://static.wixstatic.com/media/d3d10d_e8c2b44a78f7444aab4565fdc7d87b83~mv2.jpg/v1/fill/w_860,h_574,al_c,q_90/d3d10d_e8c2b44a78f7444aab4565fdc7d87b83~mv2.jpg",
  "freeCancelation": true,
  "price": 130,
  "locationID": "9544585e-bd71-4a15-9591-67ecc8374e5d"
},
{
  "id": "51d94ae5-5ff5-4c08-8871-b3a811990584",
  "title": "Zagreb Resort",
  "subtitle": "Zagreb Sport",
  "description": "null",
  "type": 1,
  "categorization": 3,
  "personCount": 4,
  "imageUrl": "https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2020/06/kitchen-made-by-mminterior-003.jpg",
  "freeCancelation": true,
  "price": 130,
  "locationID": "9544585e-bd71-4a15-9591-67ecc8374e5d"
},
{
  "id": "5605f001-22a3-4b3b-9a9c-0eb54c8bedbf",
  "title": "New Hotel in Center",
  "subtitle": "Zagreb Inn",
  "description": "null",
  "type": 1,
  "categorization": 3,
  "personCount": 4,
  "imageUrl": "null",
  "freeCancelation": true,
  "price": 130,
  "locationID": "9544585e-bd71-4a15-9591-67ecc8374e5d"
},
{
  "id": "6e8b3eba-48ef-48a4-8631-7dd39839425e",
  "title": "Mobile House Blue",
  "subtitle": "mobile house Red",
  "description": "null",
  "type": 2,
  "categorization": 3,
  "personCount": 4,
  "imageUrl": "null",
  "freeCancelation": true,
  "price": 100,
  "locationID": "0f29d778-0592-43cb-a21c-a4aa6a4c7997"
},
{
  "id": "83aff79b-4a25-4131-8a1f-a3ed581891e3",
  "title": "Best htel in Zagreb",
  "subtitle": "Zagreb Hilton",
  "description": "null",
  "type": 1,
  "categorization": 3,
  "personCount": 4,
  "imageUrl": "null",
  "freeCancelation": true,
  "price": 130,
  "locationID": "e80b2420-69da-4426-83b5-9acdde15a32c"
},
{
  "id": "8822d26b-02cc-4882-8dbd-83406fb33260",
  "title": "Pozega Resort since 1999",
  "subtitle": "Pozega Resort",
  "description": "null",
  "type": 1,
  "categorization": 3,
  "personCount": 4,
  "imageUrl": "null",
  "freeCancelation": true,
  "price": 130,
  "locationID": "e80b2420-69da-4426-83b5-9acdde15a32c"
},
{
  "id": "b292d771-b78a-4e36-b889-ec783846b4c8",
  "title": "Zagreb Resort since 1999",
  "subtitle": "Zagreb Resort",
  "description": "null",
  "type": 1,
  "categorization": 3,
  "personCount": 4,
  "imageUrl": "null",
  "freeCancelation": true,
  "price": 130,
  "locationID": "9544585e-bd71-4a15-9591-67ecc8374e5d"
},
{
  "id": "ca41fcd0-2474-48e9-b908-2160841179e9",
  "title": "Best Mobile House Inn",
  "subtitle": "Best mobile house",
  "description": "null",
  "type": 2,
  "categorization": 3,
  "personCount": 4,
  "imageUrl":" null",
  "freeCancelation": true,
  "price": 100,
  "locationID": "0f29d778-0592-43cb-a21c-a4aa6a4c7997"
}
]
onItemRecived(item: Accomodation){
  console.log(item)
}
numberOfRows(len:Accomodation[],until:number){
  const num=len.slice(0,until)
  return num
}  
  
  constructor() { }

  ngOnInit(): void {
  }

}
