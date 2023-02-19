import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private userser: UserService){}

  cart:any
  total:number=0
  items=0
  ngOnInit() {
    this.cart=this.userser.cart;
    this.items=this.cart.length;
    for(let i=0;i<this.items;i++){
      this.total=this.total+parseInt(this.cart[i].price)
    }
  }


}
