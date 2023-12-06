import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalParentComponent } from './signal-parent.component';

describe('SignalParentComponent', () => {
  let component: SignalParentComponent;
  let fixture: ComponentFixture<SignalParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalParentComponent]
    });
    fixture = TestBed.createComponent(SignalParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
