import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UpdateCurrentUserComponent } from '../update-current-user/update-current-user.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  user: User = new User();
  constructor(public dialog: MatDialog, private tokenStorageService: TokenStorageServiceService, private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
    console.log(this.userService.getCurrentUser())

    this.isLoggedIn$ = this.tokenStorageService.isLoggedIn;
    this.user.lastname = this.userService.getCurrentUser().last_name || this.userService.getCurrentUser().lastname;
    this.user.firstname = this.userService.getCurrentUser().first_name || this.userService.getCurrentUser().firstname;

    this.user.role = this.userService.getCurrentUser().role;






  }

  quit() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl("");
  }
  openUpdateCurrentUserDialog() {
    const dialogRef = this.dialog.open(UpdateCurrentUserComponent).afterClosed().subscribe(() => {
    });
  }


}
