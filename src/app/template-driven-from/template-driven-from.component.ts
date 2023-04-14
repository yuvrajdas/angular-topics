import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.scss']
})
export class TemplateDrivenFromComponent implements OnInit {

  constructor() { }
  user:User = {
    name: '',
    email: '',
    mobile: '',
    framwork: ''
  }
  framworks= ['React','Angular','Vue','JQuery'];
  ngOnInit(): void {
  }
  submitForm(formdata:any){
    console.log(formdata.controls.email.errors
      , "SDFAaaaaaaaaaa");
    
  }
}

export class User {
  name:string | undefined;
  email:string | undefined;
  mobile:string | undefined;
  framwork:string | undefined;
}