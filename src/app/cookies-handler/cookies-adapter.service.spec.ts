import { TestBed, inject } from '@angular/core/testing';

import { CookiesAdapter } from './cookies-adapter.service';

describe('CookiesAdapter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookiesAdapter]
    });
  });

  it('should be created', inject([CookiesAdapter], (service: CookiesAdapter) => {
    expect(service).toBeTruthy();
  }));
});
