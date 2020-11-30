import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { DetailComponent } from './detail/detail.component';
import { PaymentComponent } from './payment/payment.component';
import { NgxStripeModule } from 'ngx-stripe';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    DetailComponent,
    PaymentComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_51HpFb4EMPE3A40nBB6IUeqDjZhja6bOWcq9yAyEVqj7p0icfUknI34DylHvKvGEzt3UOap9Wg9NB3ij5CMiG36sD00ZglnsxAM'),
  ],
  exports: [
    UserComponent,
    HomeComponent,
    DetailComponent,
    PaymentComponent
  ]
})
export class PagesModule { }
