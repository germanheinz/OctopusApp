import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  products: Product[] = [];
  productStatus = true;
  status: any [] = [];

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  async getHistory(){
    return await this.paymentService.history('cus_IQRUtsi5vjMK3R').subscribe(resp => {
      console.log(resp);
      const {ok, paymentIntents} = resp;
      const { data }  = paymentIntents;
      console.log(...data);
      this.products = [...data];
    });
  }
}
