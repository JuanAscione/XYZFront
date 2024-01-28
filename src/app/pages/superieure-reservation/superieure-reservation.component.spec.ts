import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperieureReservationComponent } from './superieure-reservation.component';

describe('SuperieureReservationComponent', () => {
  let component: SuperieureReservationComponent;
  let fixture: ComponentFixture<SuperieureReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperieureReservationComponent]
    });
    fixture = TestBed.createComponent(SuperieureReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
