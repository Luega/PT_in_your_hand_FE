import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

const authService: AuthService = new AuthService();

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = new Router();

  if (authService.isLoggedIn) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
