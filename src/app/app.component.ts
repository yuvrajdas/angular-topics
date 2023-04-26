import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  //  template: `<app-child #childComponent ></app-child> <button (click)="increment()">+</button> <button (click)="decrement()">-</button>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ChildComponent) childCom!: ChildComponent;

  constructor(private cdr: ChangeDetectorRef, private router:Router) {}

  ngAfterViewInit() {
    console.log("helllo");
    
    // this.cdr.detectChanges();
    if (this.childCom) {
      console.log(this.childCom);
    } else {
      console.log('Child component not found');
    }
  }
  increment(){
    this.childCom.increment();
  }
  decrement(){
    this.childCom.decrement();
  }
   
  ngOnInit(): void {
    // 
    console.log(this.childCom);
    
  }
  dataOfParentCom!:any;
  appComponentData = {
    name:'Aman',
    college:'CSVTU',
    location:'India'
  }
  displayData(e:any){
    console.log(e, "output decorator");
  }
  onchange(event:any){
    this.dataOfParentCom = event;
  }
  changeRouter(route:any){
    if(!route) return;
    
    this.router.navigateByUrl(route.target.value);
  }
}
