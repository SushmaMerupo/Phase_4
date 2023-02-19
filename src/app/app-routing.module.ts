import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './Component/admincompo/addproduct/addproduct.component';
import { AdmincompoComponent } from './Component/admincompo/admincompo.component';
import { ManageproComponent } from './Component/admincompo/managepro/managepro.component';
import { LoginComponent } from './Component/login/login.component';
import { CheckoutComponent } from './Component/usercompo/checkout/checkout.component';
import { ConfirmComponent } from './Component/usercompo/confirm/confirm.component';
import { PaymentComponent } from './Component/usercompo/payment/payment.component';
import { ShowprodsComponent } from './Component/usercompo/showprods/showprods.component';
import { UsercompoComponent } from './Component/usercompo/usercompo.component';
import { AuthguardService } from './Services/authguard.service';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'admin',canActivate:[AuthguardService],component:AdmincompoComponent,children:[
    {path:'addproduct',component:AddproductComponent},
    {path:'manageproduct',component:ManageproComponent}
  ]},
  {path:'user',component:UsercompoComponent,children:[
    {path:'',redirectTo:'showproducts',pathMatch:'full'},
    {path:'showproducts',component:ShowprodsComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'payment',component:PaymentComponent},
    {path:'confirm',component:ConfirmComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
