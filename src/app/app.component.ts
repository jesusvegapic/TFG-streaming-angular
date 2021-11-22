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
export class AppComponent implements OnInit {
  title = 'TFG Plataforma de Streaming';
  username = undefined;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  login() {
    this.dialog.open(LoginDialogComponent);
  }

  suscribe() {
    this.dialog.open(SuscribeDialogComponent);
  }
}
