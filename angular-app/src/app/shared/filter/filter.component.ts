import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selectedlocation: number | undefined;
  constructor() { }
  

    locations = [
        { id: 1, name: 'Zagreb' },
        { id: 2, name: 'Split' },
        { id: 3, name: 'Dubrovnik' },
        { id: 4, name: 'Pula' },
    ];
  ngOnInit(): void {
  }

}
