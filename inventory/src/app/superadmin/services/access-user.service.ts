import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AccessUserService {

  private userUrl = 'http://localhost:3000/api/users/';
  // private oneUserUrl = 'http://localhost:3000/api/users'
  private loginUrl = 'http://localhost:3000/api/login/';

  constructor(private http: HttpClient, private router: Router) { }


  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/events']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getUser() {
    return this.http.get<any>(this.userUrl);
  }

  getOne(userid: string) {
    return this.http.get<any>(this.userUrl + userid);
  }
}
