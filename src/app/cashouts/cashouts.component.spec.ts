import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashoutsComponent } from './cashouts.component';

describe('CashoutsComponent', () => {
  let component: CashoutsComponent;
  let fixture: ComponentFixture<CashoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
