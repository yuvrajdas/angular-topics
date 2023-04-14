import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.scss']
})
export class InputDecoratorComponent implements OnInit {

  constructor() { }
  @Input() appdata:any;
  ngOnInit(): void {
  }

}
