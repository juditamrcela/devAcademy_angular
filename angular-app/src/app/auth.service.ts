import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

export interface User{
  email:string,
  password:string,
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  constructor(private router:Router,private route:ActivatedRoute) { }
  isUserLoggedIn: boolean=false;
  user!:User;
  saveData(){
      const sampleJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
      localStorage.setItem('token',sampleJWT)
      this.isUserLoggedIn=true;
  }
  onLogOut(){
    const userToken=localStorage.getItem('token');
    if(userToken){
      localStorage.clear();
      this.isUserLoggedIn=false;
      this.router.navigate(['login'],{relativeTo:this.route});
      
    }
    else{
      this.router.navigate(['login'],{relativeTo:this.route});
    }
}

}
