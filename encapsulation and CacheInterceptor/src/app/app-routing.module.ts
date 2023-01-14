import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './AuthGaurd/auth.service';
import { CandeactivateGaurdService } from './AuthGaurd/candeactivate-gaurd.service';
import { DashboardComponent } from './AuthGaurd/dashboard/dashboard.component';
import { LoginComponent } from './AuthGaurd/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthService],
    canDeactivate: [CandeactivateGaurdService]

  },
  {
    path: '',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
