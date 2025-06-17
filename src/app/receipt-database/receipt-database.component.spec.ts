import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptDatabaseComponent } from './receipt-database.component';

describe('ReceiptDatabaseComponent', () => {
  let component: ReceiptDatabaseComponent;
  let fixture: ComponentFixture<ReceiptDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptDatabaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
