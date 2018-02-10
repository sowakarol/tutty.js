import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieTestComponent } from './cookie-test.component';

describe('CookieTestComponent', () => {
  let component: CookieTestComponent;
  let fixture: ComponentFixture<CookieTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
