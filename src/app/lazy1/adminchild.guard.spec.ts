import { TestBed } from '@angular/core/testing';

import { AdminchildGuard } from './adminchild.guard';

describe('AdminchildGuard', () => {
  let guard: AdminchildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminchildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
