import { TestBed } from '@angular/core/testing';

import { ModelTypeService } from './model-type.service';

describe('ModelTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelTypeService = TestBed.get(ModelTypeService);
    expect(service).toBeTruthy();
  });
});
