import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { OperatorRoutingModule } from './operator-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OperatorRoutingModule,
    SharedModule,
  ]
})
export class OperatorModule { }
