import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-topics';
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
}
