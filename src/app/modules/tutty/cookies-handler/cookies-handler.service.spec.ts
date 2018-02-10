import { TestBed, inject } from '@angular/core/testing';

import { CookiesHandlerService } from './cookies-handler.service';

describe('CookiesHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookiesHandlerService]
    });
  });

  it('should be created', inject([CookiesHandlerService], (service: CookiesHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
