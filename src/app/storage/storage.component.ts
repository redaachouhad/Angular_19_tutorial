import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-storage',
  imports: [],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.scss'
})
export class StorageComponent {

  sessionValue: string | null = "";
  localValue: string | null = "";
  cookieValue: string | null = "";

  constructor(private cookie: CookieService) {
  }

  setSession() {
    sessionStorage.setItem('name', 'session');
    sessionStorage.setItem('pass', 'session123');
  }

  getSession() {
    this.sessionValue = sessionStorage.getItem('name');
  }

  removeSession() {
    sessionStorage.removeItem('name');
  }

  clearSession() {
    sessionStorage.clear();
    this.sessionValue = "";
  }


  setLocal() {
    localStorage.setItem('username', 'local');
    localStorage.setItem('password', 'local123');
  }

  getLocal() {
    this.localValue = localStorage.getItem('name');
  }

  removeLocal() {
    localStorage.removeItem('name');
  }

  clearLocal() {
    localStorage.clear();
    this.localValue = "";
  }

  setCookie() {
    this.cookie.set('token1', '123456', 1);
    this.cookie.set('token2', 'xyz');
  }

  getCookie() {
    this.cookieValue = this.cookie.get('token1');
  }

  deleteCookie() {
    this.cookie.delete('token1');
    this.cookieValue = "";
  }
}
