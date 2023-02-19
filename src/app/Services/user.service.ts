import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  cart:any=[];
  addtocart(product:any){
    this.cart.push(product)
  }
}
