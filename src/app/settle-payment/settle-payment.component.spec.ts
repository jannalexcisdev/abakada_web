import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlePaymentComponent } from './settle-payment.component';

describe('SettlePaymentComponent', () => {
  let component: SettlePaymentComponent;
  let fixture: ComponentFixture<SettlePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettlePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettlePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
