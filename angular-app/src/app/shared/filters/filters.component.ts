import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  
  selectedlocation: number | undefined;
  type: number | undefined;
  constructor() { }
  

    
    types = [
      { id: 1, name: 'Suite' },
      { id: 2, name: 'Room' },
      { id: 3, name: 'MobileHome' },
      { id: 4, name: 'Apartment' },
      
  ];
  onFilter(form :NgForm){
    const value=form.value;
    console.log(value)
  }
  ngOnInit(): void {
  }

}
