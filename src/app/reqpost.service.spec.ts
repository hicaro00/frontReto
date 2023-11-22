import { TestBed } from '@angular/core/testing';

import { ReqpostService } from './reqpost.service';

describe('ReqpostService', () => {
  let service: ReqpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
