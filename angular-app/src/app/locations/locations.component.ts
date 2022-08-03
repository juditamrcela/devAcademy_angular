import { Component, OnInit } from '@angular/core';
import {Location } from '../models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locationItem:Location={
    "id": "9544585e-bd71-4a15-9591-67ecc8374e5d",
    "name": "Zagreb",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Zagreb_%2829255640143%29.jpg/420px-Zagreb_%2829255640143%29.jpg",
    "postalCode": 10000

  }
  onItemRecived(event: Location){
    
    console.log(event)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
