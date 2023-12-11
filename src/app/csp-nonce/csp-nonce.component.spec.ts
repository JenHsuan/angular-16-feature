import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CspNonceComponent } from './csp-nonce.component';

describe('CspNonceComponent', () => {
  let component: CspNonceComponent;
  let fixture: ComponentFixture<CspNonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CspNonceComponent]
    });
    fixture = TestBed.createComponent(CspNonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
