import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'home', loadChildren: () => import ('./home/home.module').then(module => module.HomeModule)}, //Lazy load.
  {path: 'operator', loadChildren: () => import ('./operator/operator.module').then(module => module.OperatorModule)} //Lazy load.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
