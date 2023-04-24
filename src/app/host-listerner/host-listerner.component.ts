import { Component,HostListener,HostBinding, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'app-host-listerner',
  templateUrl: './host-listerner.component.html',
  styleUrls: ['./host-listerner.component.scss']
})

export class HostListernerComponent implements OnInit {
  
  constructor() { }
  
  @HostListener('mouseover', ['$event']) myFun(event:any){
    alert('hello')
    console.log(event);
    
  }
 

  ngOnInit(): void {
  }

}
