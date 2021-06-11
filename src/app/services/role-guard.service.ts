import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServiceService } from './user-service.service';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private userService: UserServiceService, private router: Router, private authGuard: AuthGuardService) { }
  canActivate(): boolean {
    if (this.authGuard.canActivate() && this.userService.getCurrentUser().role == 'admin')
      return true;
    else {
      this.router.navigateByUrl("");
      return false
    }

  }
}
