import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form =      new FormGroup({
      'id':          new FormControl(null),
      'name':        new FormControl(null),
      'description': new FormControl(null),
      'amount':      new FormControl(null)
    });
  }
  onSubmit(){
    console.log(this.form.value);
  }

}
