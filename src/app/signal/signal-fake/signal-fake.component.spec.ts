import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalFakeComponent } from './signal-fake.component';

describe('SignalFakeComponent', () => {
  let component: SignalFakeComponent;
  let fixture: ComponentFixture<SignalFakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalFakeComponent]
    });
    fixture = TestBed.createComponent(SignalFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
