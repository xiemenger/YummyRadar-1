import {Injectable} from '@angular/core';
import { Customer } from '../models/customer';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ErrorService} from './error.service';
@Injectable()

export class AuthService {

  constructor(private  http: HttpClient, private errorService: ErrorService) {}

  signup(customer: Customer) {
    const body = JSON.stringify(customer);
    const headers = new HttpHeaders({'Content-type':'Application/json'});
    return this.http.post('http://localhost:3000/api/auth/signup', body, {headers: headers})
      .catch((err: HttpErrorResponse) => {
        this.errorService.handleError(err.error);
        return Observable.throw(err.error);
      });
  }

  signin(customer: Customer) {
    const body = JSON.stringify(customer);
    const headers = new HttpHeaders({'Content-type':'Application/json'});
    return this.http.post('http://localhost:3000/api/auth/signin', body, {headers: headers})
      .catch((err: HttpErrorResponse) => {
        this.errorService.handleError(err.error);
        return Observable.throw(err.error);
      });
  }
 
  logout() {
    localStorage.clear();
  }

  isLoggedIn(){
    return localStorage.getItem('token') !== null;
  }
}