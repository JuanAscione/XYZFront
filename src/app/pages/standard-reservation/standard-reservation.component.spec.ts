import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardReservationComponent } from './standard-reservation.component';

describe('StandardReservationComponent', () => {
  let component: StandardReservationComponent;
  let fixture: ComponentFixture<StandardReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandardReservationComponent]
    });
    fixture = TestBed.createComponent(StandardReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
