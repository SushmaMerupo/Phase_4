import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent {
  constructor(private authser: AuthService,private router:Router){}
  uname='';
  psw='';
  errmsg:any;
  login(){
    

    console.log(this.uname,this.psw)
    console.log(this.uname==='Mini' && this.psw==='Amini123')
    if(this.uname==='Mini' && this.psw==='Amini123'){
      this.authser.login()

      this.router.navigate(['user','showproducts'])
    }
    else{
      this.errmsg="Invaild details"
      //this.router.navigate(['/login'])
    }
  }
}
