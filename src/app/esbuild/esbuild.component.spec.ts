import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsbuildComponent } from './esbuild.component';

describe('EsbuildComponent', () => {
  let component: EsbuildComponent;
  let fixture: ComponentFixture<EsbuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EsbuildComponent]
    });
    fixture = TestBed.createComponent(EsbuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
