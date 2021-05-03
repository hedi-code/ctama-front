import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private tokenStorageService: TokenStorageServiceService,
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.initForm();
    this.tokenStorageService.signOut();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((result) => {
        if (result.success) {
          this.tokenStorageService.saveToken(result.token);
          this.userService.storeUser(result.user);
          console.log(result);

          this.router.navigateByUrl("admin");


        } else {
          alert(result.message);
          console.warn(result.message);
        }
      });
    }
  }
}
