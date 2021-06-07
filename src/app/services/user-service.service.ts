import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient) { }

  addUser(data): Observable<any> {
    return this.http.post(`${baseUrl}users`, data);
  }
  deleteUser(data): Observable<any> {
    return this.http.delete(`${baseUrl}users/` + data);
  }
  updateUser(data): Observable<any> {
    return this.http.patch(`${baseUrl}users`, data);
  }
  getUser(data): Observable<any> {
    return this.http.get(`${baseUrl}users/` + data);
  }
  getUsers(): Observable<any> {
    return this.http.get(`${baseUrl}users`);
  }
  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem("currentUser")).user;
  }
  updateStoredUser(user) {
    localStorage.removeItem('currentUser')
    localStorage.setItem('currentUser', JSON.stringify(user));

  }


}
