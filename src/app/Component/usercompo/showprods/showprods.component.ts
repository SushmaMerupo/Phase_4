import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KitchenService } from 'src/app/Services/kitchen.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-showprods',
  templateUrl: './showprods.component.html',
  styleUrls: ['./showprods.component.css']
})
export class ShowprodsComponent {

  constructor(private kitcherser: KitchenService,private userser: UserService,
    private route:Router){}
  products=this.kitcherser.products;
  term=""
  result=''
  addtocart(ind:any){
    this.userser.addtocart(this.products[ind])
    console.log(this.userser.cart);
    alert('successfully added to cart')
  }
  checkout(){
    this.route.navigate(['user','checkout'])
  }
}
