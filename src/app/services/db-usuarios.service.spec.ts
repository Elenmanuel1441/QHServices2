import { TestBed } from '@angular/core/testing';

import { DbUsuariosService } from './db-usuarios.service';

describe('DbUsuariosService', () => {
  let service: DbUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
