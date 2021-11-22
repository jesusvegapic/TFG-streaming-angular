import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDialogComponent } from './dialogs/login-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { SuscribeDialogComponent } from './dialogs/suscribe-dialog.component';



@NgModule({
  declarations: [
    LoginDialogComponent,
    SuscribeDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginDialogComponent,
    SuscribeDialogComponent,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    FlexModule,
    ReactiveFormsModule,
    CommonModule

  ],
  entryComponents: [
    LoginDialogComponent,
    SuscribeDialogComponent
  ]
})
export class SharedModule { }
