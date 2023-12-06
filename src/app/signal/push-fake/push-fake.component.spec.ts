import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushFakeComponent } from './push-fake.component';

describe('PushFakeComponent', () => {
  let component: PushFakeComponent;
  let fixture: ComponentFixture<PushFakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PushFakeComponent]
    });
    fixture = TestBed.createComponent(PushFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
