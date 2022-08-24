import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../styles.css']
})
export class AppComponent implements OnInit {
  constructor(private router:Router,private route:ActivatedRoute,private authService:AuthService){}
  ngOnInit(): void {
    
    this.authService.onLogOut();
  }
  title = 'angular-app';
  
}
