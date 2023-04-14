import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  compAData =  new BehaviorSubject({});
  currentData =  this.compAData.asObservable();
  constructor(private http: HttpClient) {    
  }

  getUsers(){
   return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  setDataWithBSvariable(data:any){
    
    this.compAData.next(data);
  }
}
