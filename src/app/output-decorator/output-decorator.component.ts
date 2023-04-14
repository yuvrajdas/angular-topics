import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.scss']
})
export class OutputDecoratorComponent implements OnInit {

  constructor() { }
  @Output() childCData = new EventEmitter<any>();
  inputValue = ''
  ngOnInit(): void {
  }
  name!:any;
  changeInputValue(){
    this.childCData.emit(this.inputValue);
  }
}
