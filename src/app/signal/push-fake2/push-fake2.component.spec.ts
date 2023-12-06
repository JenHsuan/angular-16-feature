import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushFake2Component } from './push-fake2.component';

describe('PushFake2Component', () => {
  let component: PushFake2Component;
  let fixture: ComponentFixture<PushFake2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PushFake2Component]
    });
    fixture = TestBed.createComponent(PushFake2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
