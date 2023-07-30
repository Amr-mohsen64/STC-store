import { AuthService } from './core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  title = 'STC-Store';

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
