import { inject } from '@angular/core';
import { CanActivateFn, Route, Router, UrlSegment } from '@angular/router';
import { AutenticacionService } from '../service/autenticacion.service';

export const autenticaGuard: CanActivateFn = (route: Route | any, state: any | UrlSegment[]) => {

  const router = inject(Router);
  const authServicio = inject(AutenticacionService);

  if (authServicio.sesionIniciada()) {
    return true;
  } else {
    localStorage.setItem('redirectUrl', state.url)
    return router.parseUrl('/login');
  }

};
