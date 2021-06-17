import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AddUserComponent } from './components/add-user/add-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UpdateCurrentUserComponent } from './components/update-current-user/update-current-user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';
import { ChiffreAffaireComponent } from './components/chiffre-affaire/chiffre-affaire.component';
import { EncaissementComponent } from "./encaissement/encaissement.component";
import { SinstreComponent } from "./sinstre/sinstre.component";
import { CeanceComponent } from "./ceance/ceance.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "admin",
    component: UserManagementComponent,
    canActivate: [RoleGuardService],

  },

  {
    path: "add-user",
    component: AddUserComponent,
    canActivate: [RoleGuardService],

  },
  {
    path: "delete-user",
    component: DeleteUserComponent,
    canActivate: [RoleGuardService],

  },
  {
    path: "update-user",
    component: UpdateUserComponent,
    canActivate: [RoleGuardService],

  },
  {
    path: "update-current-user",
    component: UpdateCurrentUserComponent,
    canActivate: [AuthGuardService],

  },
  {
    path: "chiffre",
    component: ChiffreAffaireComponent,
    canActivate: [AuthGuardService],

  },
  {
    path: "encaissement",
    component: EncaissementComponent,
    canActivate: [AuthGuardService],

  },
  {
    path: "sinistre",
    component: SinstreComponent,
    canActivate: [AuthGuardService],

  },
  {
    path: "creance",
    component: CeanceComponent,
    canActivate: [AuthGuardService],

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
