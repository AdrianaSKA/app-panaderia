import { CanMatchFn } from '@angular/router';
import { autenticaGuard } from './autentica.guard';
import { inject } from '@angular/core';
import { AutenticacionService } from '../service/autenticacion.service';

export const loginMatchGuard: CanMatchFn = (route, segments) => {
  const authServicio = inject(AutenticacionService);
  return !authServicio.sesionIniciada();
};
