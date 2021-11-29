import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { Role } from '@core/role.model';
import { RoleGuardService } from '@core/role-guard.service';


const routes: Routes = [{
  path: '', // 'home' to forRoot
  component: HomeComponent,
  canActivate: [RoleGuardService],
  data: {roles: [Role.ADMIN, Role.MOD, Role.CLIENT]}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
