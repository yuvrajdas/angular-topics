import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}
   token = "asdklhfwhefnwihf2398rif2h3nr4ufn";
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Header interceptor================>",request);
    // request['token'] = '';
   
    let res =  request.clone({
      setHeaders:{jwtToken:this.token}
      // headers: unAuthRequest.headers.set('Authorization', 'Bearer ' + userToken)
    })

    // request['authToken'] = this.token;
      // setHeaders:{jwtToken:this.token}
    return next.handle(res);
  }
}
