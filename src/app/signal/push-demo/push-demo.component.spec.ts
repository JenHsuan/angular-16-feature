import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushDemoComponent } from './push-demo.component';

describe('PushDemoComponent', () => {
  let component: PushDemoComponent;
  let fixture: ComponentFixture<PushDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PushDemoComponent]
    });
    fixture = TestBed.createComponent(PushDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
