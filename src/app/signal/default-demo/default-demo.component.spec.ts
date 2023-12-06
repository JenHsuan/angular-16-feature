import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDemoComponent } from './default-demo.component';

describe('DefaultDemoComponent', () => {
  let component: DefaultDemoComponent;
  let fixture: ComponentFixture<DefaultDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DefaultDemoComponent]
    });
    fixture = TestBed.createComponent(DefaultDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
