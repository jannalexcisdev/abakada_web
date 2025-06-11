import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptEncodingComponent } from './receipt-encoding.component';

describe('ReceiptEncodingComponent', () => {
  let component: ReceiptEncodingComponent;
  let fixture: ComponentFixture<ReceiptEncodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptEncodingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
