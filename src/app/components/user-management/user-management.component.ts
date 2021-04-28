import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'role'];
  dataSource: MatTableDataSource<User>;
  users: User[] = [];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
    // this.getAllUsers();
    this.userService.getUsers().subscribe(results => {
      console.log(results);
      this.users = results.data;
      this.dataSource = new MatTableDataSource<User>(this.users)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })

  }



  ngAfterViewInit() {


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
