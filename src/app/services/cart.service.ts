import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product){
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
  removeCart(product: Product){
    console.log(product);
    const i = this.products.indexOf(product);
    if ( i !== -1 ) {
      this.products.splice(i, 1);
    }
    this.cart.next(this.products);
  }

}
