import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.scss']
})
export class NgtemplateComponent implements OnInit {

  constructor() { }
  isValid = true;
  conditionA = false;
  conditionB = false;
  conditionC = true;
  ngOnInit(): void {
  }

}
