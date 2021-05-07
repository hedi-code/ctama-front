import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../model/User';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageServiceService {
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    let token: string = localStorage.getItem(TOKEN_KEY);
    if (token != null) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);

    }
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  signOut() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("currentUser");
    this.loggedIn.next(false);

  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
    this.loggedIn.next(true);

  }

  public getToken(): string {
    let token: string = localStorage.getItem(TOKEN_KEY);
    if (token != null) {
      this.loggedIn.next(true)
    }
    return token;
  }


}
