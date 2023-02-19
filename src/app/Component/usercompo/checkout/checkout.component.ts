import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(private userser:UserService,private route:Router){}
  cart:any;
  ngOnInit(){
    this.cart=this.userser.cart;
  }

  payment(){
    this.route.navigate(['user','payment'])
  }

}
