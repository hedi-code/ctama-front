import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  updateUserForm: FormGroup;

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.updateUserForm = new FormGroup({
      first_name: new FormControl(""),
      last_name: new FormControl(""),
      email: new FormControl(""),
      role: new FormControl(""),
      password: new FormControl(""),
      id: new FormControl("")
    });
  }

  updateUser() {
    if (this.updateUserForm.valid) {
      this.authService.updateUser(this.updateUserForm.value).subscribe((result) => {
        if (result.success) {
          console.warn(result)

        } else
          alert("error" + result.message)
      })
    }
  }
}
