import { TestBed } from '@angular/core/testing';

import { TotkenInterceptorService } from './totken-interceptor.service';

describe('TotkenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TotkenInterceptorService = TestBed.get(TotkenInterceptorService);
    expect(service).toBeTruthy();
  });
});
