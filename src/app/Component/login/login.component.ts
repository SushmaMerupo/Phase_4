import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authser: AuthService,private router:Router){}
  uname='';
  psw='';
  login(){
    console.log(this.uname,this.psw)
    console.log(this.uname==='admin' && this.psw==='admin123')
    if(this.uname==='admin' && this.psw==='admin123'){
      this.authser.login()
      this.router.navigate(['admin'])
    }
    else{
      this.router.navigate(['/login'])
    }
  }
}
