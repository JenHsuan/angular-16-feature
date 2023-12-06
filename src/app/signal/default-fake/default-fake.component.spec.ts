import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFakeComponent } from './default-fake.component';

describe('DefaultFakeComponent', () => {
  let component: DefaultFakeComponent;
  let fixture: ComponentFixture<DefaultFakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DefaultFakeComponent]
    });
    fixture = TestBed.createComponent(DefaultFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
