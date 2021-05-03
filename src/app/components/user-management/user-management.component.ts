import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { AddUserComponent } from '../add-user/add-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'role', 'action'];
  dataSource: MatTableDataSource<User>;
  users: User[] = [];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private userService: UserServiceService, public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit() {
    // this.getAllUsers();
    this.getData()
  }

  getData() {
    this.userService.getUsers().subscribe(results => {
      console.log(results);
      this.users = results.data;

      this.dataSource = new MatTableDataSource<User>(this.users)
      this.changeDetectorRefs.detectChanges()

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dialog.afterAllClosed.subscribe(() => this.changeDetectorRefs.detectChanges()
      );
    })


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


  }
  openAddDialog() {
    const dialogRef = this.dialog.open(AddUserComponent).afterClosed().subscribe(() => {
      this.getData()
    });;


  }
  openDeleteDialog(id: number) {
    this.dialog.open(DeleteUserComponent, {
      data: {
        id: id
      }

    }).afterClosed().subscribe(() => {
      this.getData()
    });

  }

  openUpdateDialog(id: number) {
    this.dialog.open(UpdateUserComponent, {
      data: id
    }).afterClosed().subscribe(() => {
      this.getData()
    });;

  }

}

