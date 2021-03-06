import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/model/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { SnackbarServiceService } from 'src/app/services/snackbar-service.service';

@Component({
  selector: 'app-update-current-user',
  templateUrl: './update-current-user.component.html',
  styleUrls: ['./update-current-user.component.scss']
})
export class UpdateCurrentUserComponent implements OnInit {

  currentUserValues: User = new User();
  currentUserRole = this.userService.getCurrentUser().role;
  updateUserForm: FormGroup = new FormGroup({
    last_name: new FormControl(""),
    first_name: new FormControl(""),
    email: new FormControl(""),
    id: new FormControl("")
  });
  updateUserFormPassword: FormGroup = new FormGroup({
    id: new FormControl(""),
    oldPassword: new FormControl(""),
    password: new FormControl(""),
    passwordConfirmation: new FormControl("")

  })
  constructor(private userService: UserServiceService, private snackbarService: SnackbarServiceService) {
    this.userService.getUser(userService.getCurrentUser().id).subscribe(result => {
      console.warn(result)
      this.currentUserValues.firstname = userService.getCurrentUser().firstname || userService.getCurrentUser().first_name;
      this.currentUserValues.lastname = userService.getCurrentUser().lastname || userService.getCurrentUser().last_name;
      this.currentUserValues.email = userService.getCurrentUser().email;


      this.updateUserForm = new FormGroup({
        last_name: new FormControl(result.data.lastname, [Validators.required, Validators.minLength(5)]),
        first_name: new FormControl(result.data.firstname, [Validators.required]),
        email: new FormControl(result.data.email, [Validators.required, Validators.email]),
        role: new FormControl(result.data.role, [Validators.required]),
        id: new FormControl("")
      });
      this.updateUserFormPassword = new FormGroup({
        id: new FormControl(""),
        oldPassword: new FormControl("", [Validators.required, Validators.minLength(5)]),
        password: new FormControl("", [Validators.required, Validators.minLength(5)]),
        passwordConfirmation: new FormControl("", [Validators.required, Validators.minLength(5)])

      })


      console.log(this.currentUserValues.lastname + "aaaaaaaaaaaa")


    })
  }

  ngOnInit() {

  }

  get f() {
    return this.updateUserForm.controls
  }

  updateUser() {
    if (this.updateUserForm.valid == true) {
      this.updateUserForm.value.id = this.userService.getCurrentUser().id;
      this.userService.updateUser(this.updateUserForm.value).subscribe((result) => {
        if (result.success) {
          console.warn(result)
          this.snackbarService.openSnackBar("Modifi?? avec succ??es", "Fermer", 3)
          this.userService.updateStoredUser(this.updateUserForm.value)

        } else
          alert("error" + result.message)
      })
    }
  }
  updateUserPassword() {
    this.updateUserFormPassword.value.id = this.userService.getCurrentUser().id;
    this.userService.updateUserPassword(this.updateUserFormPassword.value).subscribe((result) => {
      if (result.success) {
        console.warn(result)
        this.snackbarService.openSnackBar("Mt de passemodifi?? avec succ??es", "Fermer", 3)
      }
      else
        alert(result.message)
    })
  }
}
