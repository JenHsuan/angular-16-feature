import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalFake2Component } from './signal-fake2.component';

describe('SignalFake2Component', () => {
  let component: SignalFake2Component;
  let fixture: ComponentFixture<SignalFake2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalFake2Component]
    });
    fixture = TestBed.createComponent(SignalFake2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
