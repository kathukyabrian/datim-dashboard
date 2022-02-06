import { TestBed } from '@angular/core/testing';

import { DatimService } from './datim.service';

describe('DatimService', () => {
  let service: DatimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
