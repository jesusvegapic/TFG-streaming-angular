import { Component, OnInit, OnDestroy } from '@angular/core';


import { AuthService } from '@core/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = "TFG Streaming";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  logout(): void {
    this.authService.logout();
  }

}
