import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  deleteUserForm: FormGroup;

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.deleteUserForm = new FormGroup({
      id: new FormControl(""),
    });
  }

  deleteUser() {

    if (this.deleteUserForm.valid) {
      this.authService.deleteUser(this.deleteUserForm.value.id).subscribe((result) => {
        if (result.success) {
          console.warn(result)

        } else
          alert("error" + result.message)
      })
    }

    /*
    this.authService.getUsers().subscribe((result) => {
      if (result.success) {
        console.warn(result.data)

      } else
        alert("error" + result.message)
    })
*/
  }



}
