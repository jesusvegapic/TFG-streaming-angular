import { Component} from '@angular/core';
import { SuscribeDialogComponent } from '@shared/dialogs/suscribe-dialog.component';
import { LoginDialogComponent } from '@shared/dialogs/login-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@core/auth.service';

@Component({
  selector: 'auth-toolbar',
  templateUrl: './auth-toolbar.component.html',
  styleUrls: ['./app.component.css']
})
export class AuthToolbarComponent {
  title = "TFG Streaming";

  constructor(private dialog: MatDialog, private authService: AuthService) {}

  login(): void {
    this.dialog.open(LoginDialogComponent);
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  suscribe() {
    this.dialog.open(SuscribeDialogComponent);
  }

}
