import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router)
  const austhSrv = inject(AuthService);
  const isAuth = await austhSrv.isAuth();
  if(!isAuth){
    console.log(!isAuth);
    router.navigateByUrl("/login"); // Cambia "/login" a la ruta de tu página de login
    return false;
  }
  return true;
};
