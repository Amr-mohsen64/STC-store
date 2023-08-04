import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from '../../services/auth/auth.service';

const emptyUser: User = { name: '', password: '', permissions: [] };
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  user: User = emptyUser;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.signIn(this.user);
  }

  ngOnDestroy(): void {
    this.user = emptyUser;
  }
}
