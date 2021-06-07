import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject, } from "rxjs";
import { baseUrl } from "src/environments/environment";
import { map } from 'rxjs/operators';
import { TokenStorageServiceService } from './token-storage-service.service';

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageServiceService) { }

  login(data): Observable<any> {
    return this.http.post(`${baseUrl}users/login`, data).pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.removeItem('currentUser')
        localStorage.setItem('currentUser', JSON.stringify(user));
      }

      return user;
    }));
  }


  quit() {
    this.tokenStorageService.signOut();
  }

}
