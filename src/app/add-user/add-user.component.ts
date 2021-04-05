import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(private authService: AuthServiceService,
    private router: Router) { }

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
      this.authService.addUser(this.addUserForm.value).subscribe((result) => {
        if (result.success) {
          console.warn(result)

        } else
          alert("error" + result.message)
      })
    }
  }

}
