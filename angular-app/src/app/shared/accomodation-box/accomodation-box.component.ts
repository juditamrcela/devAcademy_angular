import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {Accomodation} from '../../models/Accomodation.model';
@Component({
  selector: 'app-accomodation-box',
  templateUrl: './accomodation-box.component.html',
  styleUrls: ['./accomodation-box.component.css']
})
export class AccomodationBoxComponent implements OnInit {
  @Input() accommodationInput !: Accomodation 
  @Output() accommodationOutput =new  EventEmitter<Accomodation>();
  constructor() { }

  ngOnInit(): void {
  }
  counter(i:number){
    return new Array(i);
  }
  send(){
   
      this.accommodationOutput.emit(this.accommodationInput);
   
    
  }

}
