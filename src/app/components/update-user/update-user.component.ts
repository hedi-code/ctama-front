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
  updateUserForm: FormGroup = new FormGroup({
    last_name: new FormControl("", [Validators.required]),
    first_name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    role: new FormControl("", [Validators.required]),
    id: new FormControl("")
  });
  currentUserValues: User = new User();
  constructor(private userService: UserServiceService, @Inject(MAT_DIALOG_DATA) public data: number, private snackbarService: SnackbarServiceService) {

  }

  ngOnInit() {

    this.initForm();
  }
  initForm() {
    this.userService.getUser(this.data).subscribe(result => {
      this.currentUserValues = result.data;
      this.updateUserForm.value.first_name = result.data.firstname;
      this.updateUserForm.value.last_name = result.data.lastname;
      this.updateUserForm.value.email = result.data.email;
      this.updateUserForm.value.role = result.data.role;


      console.log(this.currentUserValues.firstname + "aaaaaaaaaaaa")


    })

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
