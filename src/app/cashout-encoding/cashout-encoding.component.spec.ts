import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashoutEncodingComponent } from './cashout-encoding.component';

describe('CashoutEncodingComponent', () => {
  let component: CashoutEncodingComponent;
  let fixture: ComponentFixture<CashoutEncodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashoutEncodingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashoutEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
