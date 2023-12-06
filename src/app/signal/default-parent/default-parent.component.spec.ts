import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultParentComponent } from './default-parent.component';

describe('DefaultParentComponent', () => {
  let component: DefaultParentComponent;
  let fixture: ComponentFixture<DefaultParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DefaultParentComponent]
    });
    fixture = TestBed.createComponent(DefaultParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
