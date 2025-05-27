import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAdmin = !!localStorage.getItem('isAdmin');

  if (isAdmin) {
    return true; // usuário autenticado: segue
  }

  // não autenticado: redireciona para /adm/login
  return router.parseUrl('adm/login');
};
