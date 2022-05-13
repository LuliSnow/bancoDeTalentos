import { TestBed } from '@angular/core/testing';

import { AuthPerfilService } from './auth-perfil.service';

describe('AuthPerfilService', () => {
  let service: AuthPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
