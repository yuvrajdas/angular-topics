import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-b-component',
  templateUrl: './b-component.component.html',
  styleUrls: ['./b-component.component.scss']
})
export class BComponentComponent implements OnInit {

  constructor(private us:UsersService) { }
  fetchedDataFromAcom!:any
  ngOnInit(): void {
    // this.us.currentData.subscribe((res)=>{
    //   this.fetchedDataFromAcom = res;
    // })
    this.us.compAData.subscribe((res)=>{
      this.fetchedDataFromAcom = res;
    })
  }

}
