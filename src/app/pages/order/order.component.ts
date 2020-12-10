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

  productStatus(product: Product){
    console.log(product);
    const i = this.products.indexOf(product);
    if ( i !== -1 && product.status === 'succeeded') {
      this.products.splice(i, 1);
    }
  }

  remove(product: Product){
    console.log(product);
    this.cartService.removeCart(product);
    if(this.products.length === 0){
      console.log('esto es 0');
      this.buyIt=false;
    }
  }

}
