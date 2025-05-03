import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) { }

  getUserData(){
    return this._http.get(this.API_URL);
  };
  userData = {
    id: 1,
    name: 'John',
    username: 'Smith',
    email: 'smith@gmail.com',
    subscription: 'basic'
  }

  isEligibleForSubscription(){
    return this.userData.subscription === 'basic' && this.userData.email.endsWith('@gmail.com');
  }
}
