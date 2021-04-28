import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  storeUser(data) {
    localStorage.setItem("firstname", data.firstname);
    localStorage.setItem("lastname", data.lastname);
    localStorage.setItem("email", data.email);
    localStorage.setItem("role", data.role);

  }
}
