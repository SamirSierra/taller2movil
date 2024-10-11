import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router)
  const austhSrv = inject(AuthService);
  const isAuth = await austhSrv.isAuth();
  if(!isAuth){
    router.navigateByUrl('');
    return false;
  }
  return true;
};
