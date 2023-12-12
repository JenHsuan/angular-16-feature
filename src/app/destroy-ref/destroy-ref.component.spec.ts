import { ComponentFixture, TestBed } from '@angular/core/testing';
import DestroyRefComponent from './destroy-ref.component';


describe('DestroyRefComponent', () => {
  let component: DestroyRefComponent;
  let fixture: ComponentFixture<DestroyRefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DestroyRefComponent]
    });
    fixture = TestBed.createComponent(DestroyRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
