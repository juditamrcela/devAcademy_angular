import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {Accomodation} from '../../models/Accomodation.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-accomodation-box',
  templateUrl: './accomodation-box.component.html',
  styleUrls: ['./accomodation-box.component.css']
})
export class AccomodationBoxComponent implements OnInit {
  @Input() accommodationInput !: Accomodation 
  @Output() accommodationOutput =new  EventEmitter<Accomodation>();
  isPrint=false;
  constructor() { }
  // private locationName:Location | undefined;
  // this.locationName={Location: this.accommodationInput.location.map(n=>n.name)}
  ngOnInit(): void {
    this.isPrint=true;
  }
  counter(i:number){
    return new Array(i);
  }
  send(){
      this.accommodationOutput.emit(this.accommodationInput);
      
  }

}
