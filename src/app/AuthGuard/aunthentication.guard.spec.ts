import { TestBed } from '@angular/core/testing';

import { AunthenticationGuard } from './aunthentication.guard';

describe('AunthenticationGuard', () => {
  let guard: AunthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AunthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
