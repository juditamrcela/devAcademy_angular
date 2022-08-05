import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selectedlocation: number | undefined;
  type: number | undefined;
  constructor() { }
  

    locations = [
        { id: 1, name: 'Zagreb' },
        { id: 2, name: 'Split' },
        { id: 3, name: 'Dubrovnik' },
        { id: 4, name: 'Pula' },
    ];
    types = [
      { id: 1, name: 'Room' },
      { id: 2, name: 'MobileHome' },
      { id: 3, name: 'Apartment' },
      
  ];
  ngOnInit(): void {
  }

}
