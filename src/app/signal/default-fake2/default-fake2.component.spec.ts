import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFake2Component } from './default-fake2.component';

describe('DefaultFake2Component', () => {
  let component: DefaultFake2Component;
  let fixture: ComponentFixture<DefaultFake2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DefaultFake2Component]
    });
    fixture = TestBed.createComponent(DefaultFake2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
