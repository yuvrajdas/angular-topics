import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-topics';
  dataOfParentCom!:any;
  constructor(private router:Router){}
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
