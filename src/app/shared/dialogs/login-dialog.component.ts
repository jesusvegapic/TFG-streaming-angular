import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { SuscribeDialogComponent } from './suscribe-dialog.component';

@Component({
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class LoginDialogComponent {
  email: string;
  password: string;

  constructor(private router: Router, private dialog: MatDialog) { }

  login() {

  }

  suscribe() {
    this.dialog.closeAll();
    this.dialog.open(SuscribeDialogComponent);
  }
}
