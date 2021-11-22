import { Component, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {User} from '../models/userRegister.model';
import { Role } from '@core/role.model';

@Component({
  templateUrl: './suscribe-dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class SuscribeDialogComponent {
  static CLIENT = '/clients';
  user: User;
  hide = true;


  constructor(@Inject(MAT_DIALOG_DATA) data: User, private dialog: MatDialog, private router: Router) {
    this.user = data ? data: {
      name: undefined, email: undefined, familyName: undefined, address: undefined, city: undefined,
      province: undefined, postalCode: undefined, bankAccount: undefined, passwd: undefined,
      role: Role.CLIENT, active: undefined, registrationDate: new Date()
    };
   }

  suscribe() {
    this.dialog.closeAll();
  }

}
