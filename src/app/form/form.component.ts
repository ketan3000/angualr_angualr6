import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('', [Validators.required, Validators.minLength(4)] ),
      code: new FormControl('', Validators.required)
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([])
  })

  onsubmit() {
    console.log('Submit:', this.form.value);
  }

}

