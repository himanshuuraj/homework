import { TestBed } from '@angular/core/testing';

import { CommunicatingServiceService } from './communicating-service.service';

describe('CommunicatingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunicatingServiceService = TestBed.get(CommunicatingServiceService);
    expect(service).toBeTruthy();
  });
});
