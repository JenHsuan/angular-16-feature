import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneParentComponent } from './standalone-parent.component';

describe('StandaloneParentComponent', () => {
  let component: StandaloneParentComponent;
  let fixture: ComponentFixture<StandaloneParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StandaloneParentComponent]
    });
    fixture = TestBed.createComponent(StandaloneParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
