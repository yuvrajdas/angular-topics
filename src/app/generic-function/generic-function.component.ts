import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-function',
  templateUrl: './generic-function.component.html',
  styleUrls: ['./generic-function.component.scss']
})
export class GenericFunctionComponent implements OnInit {

  constructor() { }
  text = 'function<T>';
  genericFunctionExample<T>(val:T){
    console.log(val, typeof val);
  }
  ngOnInit(): void {
    this.genericFunctionExample('Ram');
    this.genericFunctionExample(12345);
  }

}
