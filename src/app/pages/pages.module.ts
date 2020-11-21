import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { DetailComponent } from './detail/detail.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    DetailComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports:[
    UserComponent,
    HomeComponent,
    DetailComponent,
    PaymentComponent
  ]
})
export class PagesModule { }
