import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { LoginComponent } from "./login/login.component";
import { UserPageComponent } from './user-page/user-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "admin",
    component: AdminPageComponent,
  },
  {
    path: "user",
    component: UserPageComponent,
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
