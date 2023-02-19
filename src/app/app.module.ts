import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { AdmincompoComponent } from './Component/admincompo/admincompo.component';
import { AddproductComponent } from './Component/admincompo/addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { KitchenService } from './Services/kitchen.service';
import { ShowproductsComponent } from './Component/admincompo/showproducts/showproducts.component';
import { ManageproComponent } from './Component/admincompo/managepro/managepro.component';
import { UsercompoComponent } from './Component/usercompo/usercompo.component';
import { ShowprodsComponent } from './Component/usercompo/showprods/showprods.component';
import { CheckoutComponent } from './Component/usercompo/checkout/checkout.component';
import { PaymentComponent } from './Component/usercompo/payment/payment.component';
import { ConfirmComponent } from './Component/usercompo/confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmincompoComponent,
    AddproductComponent,
    ShowproductsComponent,
    ManageproComponent,
    UsercompoComponent,
    ShowprodsComponent,
    CheckoutComponent,
    PaymentComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [KitchenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
