import { OperatorComponent } from './operator.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { OperatorRoutingModule } from './operator-routing.module';


@NgModule({
  declarations: [OperatorComponent],
  imports: [
    OperatorRoutingModule,
    SharedModule,
  ]
})
export class OperatorModule { }
