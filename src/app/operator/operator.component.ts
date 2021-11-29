import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css', '../app.component.css']
})
export class OperatorComponent implements OnInit {

  constructor(private authService: AuthService) { }
  title = "TFG streaming";

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
