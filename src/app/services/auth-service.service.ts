import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseUrl } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post(`${baseUrl}users/login`, data);
  }

  storeToken(token) {
    localStorage.setItem("token", token);
  }

  getToken(): String {
    return localStorage.getItem("token");
  }


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
}
