import { TestBed, inject } from '@angular/core/testing';

import { TuttyService } from './tutty.service';

describe('TuttyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuttyService]
    });
  });

  it('should be created', inject([TuttyService], (service: TuttyService) => {
    expect(service).toBeTruthy();
  }));
});
