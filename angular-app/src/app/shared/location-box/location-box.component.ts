import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-location-box',
  templateUrl: './location-box.component.html',
  styleUrls: ['./location-box.component.css']
})
export class LocationBoxComponent implements OnInit {
   @Input() locationInput : Location | undefined;
   @Output() locationOutput = new EventEmitter<Location>();

   onClickSend():void {
    this.locationOutput.emit(this.locationInput)
  }

  constructor() { }

  ngOnInit(): void {
  }

 
}
