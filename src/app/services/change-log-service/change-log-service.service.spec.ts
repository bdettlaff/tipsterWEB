import { TestBed } from '@angular/core/testing';

import { ChangeLogServiceService } from './change-log-service.service';

describe('ChangeLogServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeLogServiceService = TestBed.get(ChangeLogServiceService);
    expect(service).toBeTruthy();
  });
});
