import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Product } from 'src/app/models/product.model';

declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  total:    Observable<number>;
  products: Product[] = [];
  product:  Product;

  constructor(private cartService: CartService){
    const product1 = ({
      id: '1',
      name: 'test 1',
      amount: '100'
    }) as Product;

    const product2 = ({
      id: '2',
      name: 'test 2',
      amount: '200'
    }) as Product;

    const product3 = ({
      id: '3',
      name: 'test 3',
      amount: '300'
    }) as Product;

    this.products = [ product1, product2, product3 ];
  }

  ngOnInit(): void {
    
  }

  addProductCart(product: Product){
    this.cartService.addCart(product);
    this.cartService.cart$.pipe(map(products => products.length));
    Swal.fire(
      'New Product added to Cart!',
      'You can see this products in your cart!',
      'success'
    );
    this.removeProductFromHome(product);
  }

  removeProductFromHome(product: Product){
    const i = this.products.indexOf(product);
    if ( i !== -1 ) {
      this.products.splice(i, 1);
    }
  }







}
