import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail="";
  userPass="";
  token=null;
  checked=false;
  constructor(private router:Router,private route:ActivatedRoute,private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){

    this.userEmail=form.value.email;
    this.userPass=form.value.password
    this.authService.saveData()
    console.log('User logged in')
    this.router.navigate(['/home'])
    form.reset();

  }

}
