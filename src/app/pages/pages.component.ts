import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerToggleResult } from '@angular/material/sidenav/drawer';
import { resolve } from 'dns';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);


  total$: Observable<number>;
  
  @ViewChild('drawer') drawer: ElementRef;

  showFiller = false;

  counterCart = 1;

  constructor(private overlay: OverlayContainer,
              private userService: UserService,
              private cartService: CartService) {

                this.total$ = this.cartService.cart$.pipe(
                  map(products => {
                    console.log(products);
                    return products.length;
                  })
                );
              }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe( darkMode => {
      console.log(darkMode);
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
    console.log(this.total$);
    console.log(this.toggleControl); 
  }

  logOut(){
    this.userService.logOut();
  }

  test(){
    console.log(this.drawer);
    // console.log(open());  
  }
  // open(): Promise<MatDrawerToggleResult>{
  //   const promise = new Promise<MatDrawerToggleResult>(resolve => {
  //     console.log(resolve);
  //   });
  //   return promise; 
  // }

}
