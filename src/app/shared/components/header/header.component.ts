import { SnackBarService } from 'src/app/core/services/snack-bar/snack-bar.service';
import { AuthService } from '../../../modules/auth/services/auth/auth.service';
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
