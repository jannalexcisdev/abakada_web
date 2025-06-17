import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbakadaAuditingComponent } from './abakada-auditing.component';

describe('AbakadaAuditingComponent', () => {
  let component: AbakadaAuditingComponent;
  let fixture: ComponentFixture<AbakadaAuditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbakadaAuditingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbakadaAuditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
