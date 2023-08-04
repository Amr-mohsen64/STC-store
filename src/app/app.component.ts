import { AuthService } from './modules/auth/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService) {}
  title = 'STC-Store';

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
