import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageServiceService } from './token-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private tokenStorageService: TokenStorageServiceService, private router: Router) { }
  canActivate(): boolean {
    if (this.tokenStorageService.getToken() == "" || this.tokenStorageService.getToken() == null) {
      this.router.navigateByUrl("");
      return false;
    }
    return true;

  }

}
