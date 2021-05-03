import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatSnackBar } from '@angular/material';
import { SnackbarServiceService } from 'src/app/services/snackbar-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(private userService: UserServiceService,
    private router: Router, private snackbarService: SnackbarServiceService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addUserForm = new FormGroup({
      first_name: new FormControl(""),
      last_name: new FormControl(""),
      email: new FormControl(""),
      role: new FormControl(""),
      password: new FormControl(""),
    });
  }

  addUser() {
    if (this.addUserForm.valid) {
      this.userService.addUser(this.addUserForm.value).subscribe((result) => {
        if (result.success) {
          console.warn(result)
          this.snackbarService.openSnackBar("Ajouté avec succées", "Fermer", 3)
        } else
          alert("error" + result.message)
      })
    }
  }

}
