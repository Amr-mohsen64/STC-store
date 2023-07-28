import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = new BehaviorSubject<User | null>(null);

  constructor(private router: Router) {}

  get isUserAuthenticated() {
    return this.user.value != null;
  }

  signIn(user: User) {
    if (user.name.toLowerCase() === 'user' && user.password === '123') {
      this.router.navigate(['/user-view']);
    } else if (user.name.toLowerCase() === 'admin' && user.password === '123') {
      this.router.navigate(['/admin-view']);
    } else {
      return;
    }
    this.handleAuthentication(user);
  }

  handleAuthentication(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
    this.user.next(user);
  }

  autoLogin() {
    let userData: any = localStorage.getItem('userData');
    userData = JSON.parse(userData);

    if (!userData) {
      return;
    } else {
      this.user.next(userData);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }
}
