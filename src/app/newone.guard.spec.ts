import { TestBed } from '@angular/core/testing';

import { NewoneGuard } from './newone.guard';

describe('NewoneGuard', () => {
  let guard: NewoneGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewoneGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
