import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.scss']
})
export class HttpInterceptorComponent implements OnInit {

  constructor(private us:UsersService) { }

  ngOnInit(): void {
    console.log("http-interceptor component");
    this.showUserData();
  }

  showUserData(){
    this.us.getUsers().subscribe((res)=>{
      // console.log(res);
    })
  }
}
