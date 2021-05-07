import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/model/User';
import { SnackbarServiceService } from 'src/app/services/snackbar-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  currentUserValues: User = new User();

  updateUserForm: FormGroup = new FormGroup({
    last_name: new FormControl(""),
    first_name: new FormControl(""),
    email: new FormControl(""),
    role: new FormControl(""),
    id: new FormControl("")
  });
  constructor(private userService: UserServiceService, @Inject(MAT_DIALOG_DATA) public data: number, private snackbarService: SnackbarServiceService) {
    this.userService.getUser(this.data).subscribe(result => {
      console.warn(result)
      this.currentUserValues.lastname = result.data.lastname;
      this.currentUserValues.firstname = result.data.firstname;
      this.currentUserValues.role = result.data.role;
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
      console.log(this.data);
      this.updateUserForm.value.id = this.data;
      this.userService.updateUser(this.updateUserForm.value).subscribe((result) => {
        if (result.success) {
          console.warn(result)
          this.snackbarService.openSnackBar("Modifié avec succées", "Fermer", 3)

        } else
          alert("error" + result.message)
      })
    }
  }


}
