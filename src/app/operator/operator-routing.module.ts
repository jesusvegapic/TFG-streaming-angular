import { OperatorComponent } from './operator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Role } from '@core/role.model';
import { RoleGuardService } from '@core/role-guard.service';

const routes: Routes = [{
  path: '', // 'operator' to forRoot
  component: OperatorComponent,
  canActivate: [RoleGuardService],
  data: {roles: [Role.ADMIN, Role.MOD]}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorRoutingModule { }
