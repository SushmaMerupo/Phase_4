import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  
  products:any=[];
  constructor() { }

  addproduct(product:any){
    this.products.push(product)
  }
}
