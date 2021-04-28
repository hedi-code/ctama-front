import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  deleteUserForm: FormGroup;

  constructor(private userService: UserServiceService) { }

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
      this.userService.deleteUser(this.deleteUserForm.value.id).subscribe((result) => {
        if (result.success) {
          console.warn(result)

        } else
          alert("error" + result.message)
      })
    }

    /*
    this.userService.getUsers().subscribe((result) => {
      if (result.success) {
        console.warn(result.data)

      } else
        alert("error" + result.message)
    })
*/
  }



}
