import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginstatus=new BehaviorSubject<boolean>(this.checkloginstatus());
  constructor() { }
  loggin=false;
  checkloginstatus(){
    var logincookie=localStorage.getItem("loginstatus");
    if(logincookie == "1")
    {
      return true;
    }
    return false;
  }
  
  login(){
    this.loggin = true;
    localStorage.setItem('loginstatus','1');
  }

  logout(){
    this.loginstatus.next(false);
    localStorage.setItem('loginstatus','0');
    this.loggin = false;
  }


  isAuthenticated (){
    return this.checkloginstatus();
  }
}
