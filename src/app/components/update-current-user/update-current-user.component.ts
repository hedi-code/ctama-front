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
  currentUserRole = JSON.parse(localStorage.getItem("currentUser")).role;
  updateUserForm: FormGroup = new FormGroup({
    last_name: new FormControl(""),
    first_name: new FormControl(""),
    email: new FormControl(""),
    id: new FormControl("")
  });
  constructor(private userService: UserServiceService, private snackbarService: SnackbarServiceService) {
    this.userService.getUser(userService.getCurrentUser().id).subscribe(result => {
      console.warn(result)
      this.currentUserValues.lastname = result.data.lastname;
      this.currentUserValues.firstname = result.data.firstname;
      this.currentUserValues.email = result.data.email;

      this.updateUserForm = new FormGroup({
        last_name: new FormControl(result.data.lastname, [Validators.required, Validators.minLength(5)]),
        first_name: new FormControl(result.data.firstname, [Validators.required]),
        email: new FormControl(result.data.email, [Validators.required, Validators.email]),
        role: new FormControl(result.data.role, [Validators.required]),
        id: new FormControl("")
      });


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
          this.snackbarService.openSnackBar("Modifié avec succées", "Fermer", 3)
          this.userService.updateStoredUser(this.updateUserForm.value)

        } else
          alert("error" + result.message)
      })
    }
  }

}
