import { TestBed } from '@angular/core/testing';

import { CommunicatingService } from './communicating-service.service';

describe('CommunicatingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunicatingService = TestBed.get(CommunicatingService);
    expect(service).toBeTruthy();
  });
});
