import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Payment } from '../models/payment.model';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  createPayment(payment: Payment){
    console.log(BASE_URL);
    return this.http.post(`${BASE_URL}/payment/create`, payment);
  }

  confirmPayment(payment: Payment){
    console.log(BASE_URL);
    console.log(payment);
    return this.http.post(`${BASE_URL}/payment/confirm`, payment);
  }

  cancelPayment(id: string){
    return this.http.post(`${BASE_URL}/payment/cancel`, id);
  }


}
