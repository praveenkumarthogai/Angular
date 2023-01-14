import { TestBed } from '@angular/core/testing';

import { CandeactivateGaurdService } from './candeactivate-gaurd.service';

describe('CandeactivateGaurdService', () => {
  let service: CandeactivateGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandeactivateGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
