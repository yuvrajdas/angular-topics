import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.scss']
})
export class AComponentComponent implements OnInit {

  constructor(private us:UsersService) { }
  AcomponentData =  {
    message:"Hi I am component A",
    data:new Date().getDate(),
    time:new Date().getTime(),
  }
  ngOnInit(): void {

  }

  sendData(){
    this.us.setDataWithBSvariable(this.AcomponentData)
  }
}
