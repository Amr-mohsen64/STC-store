import { SnackBarService } from './../../../core/services/snack-bar.service';
import { AuthService } from './../../../core/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    public snackBarService: SnackBarService
  ) {}

  logout() {
    this.authService.logout();
    this.snackBarService.openSnackBar('Signed out Succesfully');
  }
}
