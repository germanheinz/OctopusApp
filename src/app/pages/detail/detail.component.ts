import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  buyIt: boolean = false;
  product: Product;


  constructor(private activatedRoute: ActivatedRoute) {
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
}
