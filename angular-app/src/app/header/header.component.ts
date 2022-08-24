import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private authService:AuthService) { }

  ngOnInit(): void {
  }
  onLogOut(){
      this.authService.onLogOut();
  }

}
