import { AuthService } from './core/auth.service';
import { SuscribeDialogComponent } from './shared/dialogs/suscribe-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatToolbar } from '@angular/material/toolbar';
import { LoginDialogComponent } from './shared/dialogs/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TFG Plataforma de Streaming';
  username = undefined;

  constructor(private dialog: MatDialog, private authService: AuthService) {}

  login(): void {
    this.dialog.open(LoginDialogComponent).afterClosed().subscribe(() => this.username = this.authService.getName);
  }

  logout(): void {
    this.authService.logout;
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  suscribe() {
    this.dialog.open(SuscribeDialogComponent);
  }
}
