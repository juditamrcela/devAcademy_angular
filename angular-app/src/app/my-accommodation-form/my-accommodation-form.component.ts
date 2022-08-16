import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { Accomodation } from 'app/models/Accomodation.model';
@Component({
  selector: 'app-my-accommodation-form',
  templateUrl: './my-accommodation-form.component.html',
  styleUrls: ['./my-accommodation-form.component.css']
})
export class MyAccommodationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  type : number | undefined;

  types = [
    { id: 1, name: 'Room' },
    { id: 2, name: 'MobileHome' },
    { id: 3, name: 'Apartment' },
    
];
onAddItem(form :NgForm){
  const value=form.value;
  // const newAccommodation=new Accomodation()

}

}
