import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import * as stripes from 'stripe';


declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor() { this.stripe(); }

  ngOnInit(): void {}

  async stripe(){

    const stripe = await loadStripe('pk_test_51HpFb4EMPE3A40nBB6IUeqDjZhja6bOWcq9yAyEVqj7p0icfUknI34DylHvKvGEzt3UOap9Wg9NB3ij5CMiG36sD00ZglnsxAM');

    // const paymentRequest = stripe.paymentRequest({
    //   country: 'US',
    //   currency: 'usd',
    //   total: {
    //     label: 'Demo total',
    //     amount: 1000,
    //   },
    //   requestPayerName: true,
    //   requestPayerEmail: true,
    // });
  // console.log(paymentRequest);
  }




}
