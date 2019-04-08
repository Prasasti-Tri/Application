import { TestBed } from '@angular/core/testing';

import { PublicAuthService } from './public-auth.service';

describe('PublicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicAuthService = TestBed.get(PublicAuthService);
    expect(service).toBeTruthy();
  });
});
