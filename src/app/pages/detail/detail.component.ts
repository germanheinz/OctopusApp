import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  buyIt = false;
  product: Product;


  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService, private router: Router) {
      this.activatedRoute.params.subscribe(params => {
        let id = params['id'];
        console.log('ID selected: ' + `${id}`);
      });
      // TODO FINDBYID IN DB
   }

  ngOnInit(): void {
  }

  buy(){
    this.buyIt = true;
  }

  addToCart(product: Product){
    console.log(product);
    // this.cartService.addCart(product);
  }
}
