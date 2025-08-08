import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { loginActivoGuard } from './login-activo.guard';

describe('loginActivoGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginActivoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
