import { TestBed } from '@angular/core/testing';

import { GroupTypeService } from './group-type.service';

describe('GroupTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupTypeService = TestBed.get(GroupTypeService);
    expect(service).toBeTruthy();
  });
});
