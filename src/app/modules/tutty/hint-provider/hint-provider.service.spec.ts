import { TestBed, inject } from '@angular/core/testing';

import { HintProviderService } from './hint-provider.service';

describe('HintProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HintProviderService]
    });
  });

  it('should be created', inject([HintProviderService], (service: HintProviderService) => {
    expect(service).toBeTruthy();
  }));
});
