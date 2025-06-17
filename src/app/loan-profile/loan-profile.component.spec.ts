import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProfileComponent } from './loan-profile.component';

describe('LoanProfileComponent', () => {
  let component: LoanProfileComponent;
  let fixture: ComponentFixture<LoanProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
