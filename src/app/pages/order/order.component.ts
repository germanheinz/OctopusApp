import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products: Product[] = [];
  product : Product;

  buyIt: boolean = false;

  constructor(private cartService: CartService) {
    this.buyIt = false;
    this.cartService.cart$.subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

  ngOnInit(): void {
  }

  buy(product: any){
    console.log(product.id);
    this.product = product;
    this.buyIt = true;
  }

  productStatus(message: string){
    console.log(message);
  }

}
