import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  user: User = new User();
  constructor(private tokenStorageService: TokenStorageServiceService, private router: Router, private userService: UserServiceService) { }

  ngOnInit() {

    this.isLoggedIn$ = this.tokenStorageService.isLoggedIn;
    if (this.userService.getCurrentUser())
      this.user.lastname = this.userService.getCurrentUser().lastname;
    this.user.role = this.userService.getCurrentUser().role;






  }

  quit() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl("");
  }


}
