import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  loggedIn=false;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.length===0){
      
    }
  }
  

}
