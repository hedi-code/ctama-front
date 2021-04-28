import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AddUserComponent } from './components/add-user/add-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "admin",
    component: UserManagementComponent,
  },

  {
    path: "add-user",
    component: AddUserComponent,
  },
  {
    path: "delete-user",
    component: DeleteUserComponent,
  },
  {
    path: "update-user",
    component: UpdateUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
