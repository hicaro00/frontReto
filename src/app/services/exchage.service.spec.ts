import { TestBed } from '@angular/core/testing';

import { ExchageService } from './exchage.service';

describe('ExchageService', () => {
  let service: ExchageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
