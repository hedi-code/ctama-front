import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  deleteUserForm: FormGroup;

  constructor(private userService: UserServiceService, @Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit() {
  }

  deleteUser(id) {

    this.userService.deleteUser(id).subscribe((result) => {
      if (result.success) {
        console.warn(result)

      } else
        alert("error" + result.message)
    })
    window.location.reload();
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




