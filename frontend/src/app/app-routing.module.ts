import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './Dashboard/users/users.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { NodesComponent } from './Dashboard/nodes/nodes.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'nodes', component: NodesComponent
  },
  {
    path: 'users', component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
