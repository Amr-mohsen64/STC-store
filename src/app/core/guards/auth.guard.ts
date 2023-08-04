import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../modules/auth/services/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);

  const isAuth = authService.isUserAuthenticated;
  return isAuth || router.createUrlTree(['/login']);
};
