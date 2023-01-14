import { TestBed } from '@angular/core/testing';

import { CommSessionService } from './comm-session.service';

describe('CommSessionService', () => {
  let service: CommSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
