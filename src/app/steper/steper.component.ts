import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
      
  }
  personalInfoFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
  });


  paymentDeatilsFormGroup = this._formBuilder.group({
    cardNumber: ['', Validators.required],
    expiryData: ['', Validators.required],
    cvv: ['', Validators.required],
  });

  shippingDetailsFormGroup = this._formBuilder.group({
    addressLine1:['',Validators.required],
    addressLine2:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    country:['',Validators.required]
  })
  isLinear = false;

}
