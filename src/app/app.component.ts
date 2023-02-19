import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  constructor(private authser: AuthService,private router:Router){}
  logout(){
    this.authser.logout();
    this.router.navigate([''])
  }
}
