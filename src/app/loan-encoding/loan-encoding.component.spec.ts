import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEncodingComponent } from './loan-encoding.component';

describe('LoanEncodingComponent', () => {
  let component: LoanEncodingComponent;
  let fixture: ComponentFixture<LoanEncodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanEncodingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
