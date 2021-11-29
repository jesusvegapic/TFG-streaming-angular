import { Component, Inject} from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {User} from '../models/userRegister.model';
import { Role } from '@core/role.model';
import { HttpService } from '@core/http.service';
import { EndPoints } from '@shared/end-points';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  templateUrl: './suscribe-dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class SuscribeDialogComponent {
  static CLIENT = '/clients';
  user: User;
  hide = true;


  constructor(@Inject(MAT_DIALOG_DATA) data: User, private httpService: HttpService, private router: Router,
              private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.user = data ? data: {
      name: undefined, email: undefined, familyName: undefined, address: undefined, city: undefined,
      province: undefined, postalCode: undefined, bankAccount: undefined, passwd: undefined,
      role: Role.CLIENT, active: undefined, registrationDate: new Date()
    };
   }

  suscribe() {
    this.httpService.post(EndPoints.USERS + SuscribeDialogComponent.CLIENT, this.user)
    .subscribe(() => {
      this.dialog.closeAll();
      this.openSnackBar('User ' + this.user.email + ' successfully register.', 'OK');
    })
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
