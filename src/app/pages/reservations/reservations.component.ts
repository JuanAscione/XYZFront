import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {WalletService} from "../../service/wallet.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ReservationService} from "../../service/reservation.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {

  loggedUserData: any;
  reservations: any;
  constructor(private router: Router, private reservationService: ReservationService, private snackBar: MatSnackBar) {
    const localData = localStorage.getItem('hotelUser');
    if(localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }
    this.getReservations();
  }

  getReservations() {
    this.reservationService.getReservationsById(this.loggedUserData.id).subscribe(
      (res: any) => {
        if (res) {
          console.log(res);
          this.reservations = res;
          this.calculateTotalPriceForEachReservation(this.reservations);
        } else {
          console.log('Response is empty or null');
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  calculateTotalPriceForEachReservation(reservations: any){
    for (let i = 0; i < reservations.length; i++) {
      reservations[i].totalPrice = this.calculateTotalPricePerReservation(reservations[i]);
    }
  }

  calculateTotalPricePerReservation(reservation: any) {
    let totalPrice = 0;
    for (let i = 0; i < reservation.rooms.length; i++) {
      totalPrice += reservation.rooms[i].pricePerNight;
    }
    return totalPrice * reservation.numberOfNights;
  }

  deleteReservation(reservationId: number) {
    const isConfirmed = window.confirm('Are you sure you want to cancel this reservation?');

    if (isConfirmed) {
      this.reservationService.deleteById(reservationId).subscribe(
        (res: any) => {
          if (res) {
            this.showSuccessMessage('Operation successful!');
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          } else {
            console.log('Response is empty or null');
          }
        },
        (error) => {
          alert(error.error);
        }
      );
    }
  }

  confirmReservation(reservationId: number) {
    const isConfirmed = window.confirm('Are you sure you want to confirm this reservation?');

    if (isConfirmed) {
      this.reservationService.confirmReservation(reservationId).subscribe(
        (res: any) => {
          if (res) {
            this.showSuccessMessage('Operation successful!');
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          } else {
            console.log('Response is empty or null');
          }
        },
        (error) => {
          alert(error.error);
        }
      );
    }
  }

  showSuccessMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 100000,
      panelClass: ['success-snackbar']
    });
  }

  isConfirmButtonDisabled(status: string): boolean {
    return status === 'APPROVED';
  }

}
