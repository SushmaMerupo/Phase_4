import { Component, OnInit } from '@angular/core';
import { KitchenService } from 'src/app/Services/kitchen.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit{

  constructor(private kitchenser: KitchenService){}
  products:any
  ngOnInit() {
    this.products=this.kitchenser.products
    console.log(this.products);
  }

}
