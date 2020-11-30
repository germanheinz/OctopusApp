import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import Swal from 'sweetalert2';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment.model';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  stripeForm: FormGroup;
  payment:    Payment;

  constructor(private stripeService: StripeService, 
              private fb: FormBuilder, 
              private paymentService: PaymentService) { }
 
  ngOnInit(): void {
    this.stripeForm = new FormGroup({
      id:             new FormControl('', Validators.required),
      productName:    new FormControl('', Validators.required),
      email:          new FormControl('', Validators.required),
      amount:         new FormControl('', Validators.required),
    });
    this.stripeForm.get('amount').setValue(20);
    this.stripeForm.get('id').setValue('cus_IQRUtsi5vjMK3R');

  }

  createToken(): void {
    console.log(this.stripeForm.value);
    const paymentData = this.stripeForm.value;

    this.payment = new Payment('cus_IQRUtsi5vjMK3R', 'heinz.german@gmail.com', '200');

    this.paymentService.createPayment(this.payment)
    .subscribe((resp: any) => {
      const { paymentIntent } = resp;
      this.payment.paymentId = paymentIntent.id;

      Swal.fire({
        title: 'Do you want to confirm it?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Buy'
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
          const paymentStatus = this.pay();
          console.log(paymentStatus);
          Swal.fire(
            'Congratulations!',
            'thanks for your purchase message',
            'success'
          );
        }
      });
    });
  }

  async pay(){
    return await this.paymentService.confirmPayment(this.payment).subscribe(resp => {
      console.log(resp);
    });
  }

  }