import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { KitchenService } from 'src/app/Services/kitchen.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{

  constructor(private kitchenser: KitchenService){}
  addform: any;
  ngOnInit() {
    this.addform=new FormGroup({
      'pname': new FormControl(null),
      'price': new FormControl(null),
      'description': new FormControl(null),
      'imageurl': new FormControl(null)
    })
  }
  onsubmit(){
    //console.log(this.addform.get('pname').value)  this.addform.get('pname').valid
    this.kitchenser.addproduct(this.addform.value);
    console.log(this.kitchenser.products);
  }

}
