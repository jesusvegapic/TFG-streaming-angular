import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@core/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { SuscribeDialogComponent } from './suscribe-dialog.component';

@Component({
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class LoginDialogComponent {
  email: string;
  password: string;

  constructor(private auth: AuthService, private router: Router, private dialog: MatDialog) { }

  login(): void {
    this.auth.login(this.email, this.password).subscribe(
      () => {
        if (this.auth.untilMod()) {
          this.router.navigate(['operator']).then().finally(() => this.dialog.closeAll());
        } else {
          this.router.navigate(['home']).then().finally(() => this.dialog.closeAll());
        }     
      }
    );
  }

  suscribe() {
    this.dialog.closeAll();
    this.dialog.open(SuscribeDialogComponent);
  }
}
