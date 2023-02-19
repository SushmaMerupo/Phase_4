import { Component } from '@angular/core';
import { KitchenService } from 'src/app/Services/kitchen.service';

@Component({
  selector: 'app-managepro',
  templateUrl: './managepro.component.html',
  styleUrls: ['./managepro.component.css']
})
export class ManageproComponent {

  constructor(private kitcherser: KitchenService){}
  products=this.kitcherser.products;
  deletepro(ind:any){
    this.kitcherser.products.splice(ind, 1);
  }

}
