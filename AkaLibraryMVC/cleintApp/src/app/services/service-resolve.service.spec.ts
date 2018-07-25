import { TestBed, inject } from '@angular/core/testing';

import { ServiceResolveService } from './service-resolve.service';

describe('ServiceResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceResolveService]
    });
  });

  it('should be created', inject([ServiceResolveService], (service: ServiceResolveService) => {
    expect(service).toBeTruthy();
  }));
});
