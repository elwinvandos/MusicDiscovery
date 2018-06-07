import { TestBed, inject } from '@angular/core/testing';

import { DiscoveryAPIService } from './discovery-api.service';

describe('DiscoveryAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscoveryAPIService]
    });
  });

  it('should be created', inject([DiscoveryAPIService], (service: DiscoveryAPIService) => {
    expect(service).toBeTruthy();
  }));
});
