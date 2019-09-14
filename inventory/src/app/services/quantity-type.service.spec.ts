import { TestBed } from '@angular/core/testing';

import { QuantityTypeService } from './quantity-type.service';

describe('QuantityTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuantityTypeService = TestBed.get(QuantityTypeService);
    expect(service).toBeTruthy();
  });
});
