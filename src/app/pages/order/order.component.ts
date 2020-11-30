import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  buyIt: boolean = false;
  products: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

  ngOnInit(): void {
  }

  buy(){
    this.buyIt = true;
  }
}
