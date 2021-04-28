import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject, } from "rxjs";
import { baseUrl } from "src/environments/environment";
import { TokenStorageServiceService } from './token-storage-service.service';

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageServiceService) { }

  login(data): Observable<any> {
    return this.http.post(`${baseUrl}users/login`, data)

  }


  quit() {
    this.tokenStorageService.signOut();
  }

}
