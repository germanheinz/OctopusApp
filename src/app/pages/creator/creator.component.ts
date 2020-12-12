import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  @ViewChild('exampleInputPassword1', {static: false}) serverContentInput: ElementRef;

  form: FormGroup;
  product: Product = {
    name:'',
    amount: '',
    description: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.form =      new FormGroup({
      'id':          new FormControl(null),
      'name':        new FormControl(null),
      'description': new FormControl(null),
      'amount':      new FormControl(null)
    });
    // this.onFormChange();
  }
  
  ngAfterViewInit() {
    this.serverContentInput.nativeElement.target = "DOM updated succesfully!!!"; 
    console.log(this.serverContentInput.nativeElement); 
    console.log(this.serverContentInput.nativeElement.value);

  }

  onFormChange(){
    this.form.valueChanges.subscribe(val => {

    });
  }
  
  onSubmit(){
    console.log(this.form.value);
  }

  onSearchChange(searchValue: string): void{
    console.log(searchValue);
    this.product.name = searchValue;
  }
  onSearchChange2(event: any){
    console.log(event);   
    

  }
}
