import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { SnackbarServiceService } from 'src/app/services/snackbar-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  deleteUserForm: FormGroup;

  constructor(private userService: UserServiceService, @Inject(MAT_DIALOG_DATA) public data: number, private snackbarService: SnackbarServiceService) { }

  ngOnInit() {

  }

  deleteUser(id) {

    this.userService.deleteUser(id).subscribe((result) => {
      if (result.success) {
        console.warn(result)
        this.snackbarService.openSnackBar("Supprimé avec succées", "Fermer", 3)

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




