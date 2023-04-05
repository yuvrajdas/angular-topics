import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.scss']
})
export class TemplateDrivenFromComponent implements OnInit {

  constructor() { }
  user:User = {
    name: undefined,
    emai: undefined,
    mobile: undefined,
    framwork: undefined
  }
  framworks= ['React','Angular','Vue','JQuery'];
  ngOnInit(): void {
  }
  submitForm(formdata:any){
    console.log(formdata);
    
  }
}

export class User {
  name:string | undefined;
  emai:string | undefined;
  mobile:number | undefined;
  framwork:string | undefined;
}