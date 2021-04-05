import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthServiceService } from "../services/auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    localStorage.removeItem("token")
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
          console.log(result);
          switch (result.user.role) {
            case "admin":
              this.router.navigateByUrl("admin");
              break;
            case "user":
              this.router.navigateByUrl("user");
              break;
            default:
              break;
          }
          this.authService.storeToken(result.token);
        } else {
          alert(result.message);
          console.warn(result.message);
        }
      });
    }
  }
}
