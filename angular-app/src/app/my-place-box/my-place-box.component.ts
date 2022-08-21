import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Accomodation } from 'app/models/Accomodation.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-place-box',
  templateUrl: './my-place-box.component.html',
  styleUrls: ['./my-place-box.component.css']
})
export class MyPlaceBoxComponent implements OnInit {
  @Input() accommodationInput !: Accomodation 
  @Output() accommodationOutput =new  EventEmitter<Accomodation>();
  isPrint=false;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }
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
  onClick(){
    this.accommodationOutput.emit(this.accommodationInput);
   
  }

}
