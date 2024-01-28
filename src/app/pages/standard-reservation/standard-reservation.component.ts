import { Component } from '@angular/core';
import {ReservationService} from "../../service/reservation.service";
import {DatePipe} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-standard-reservation',
  templateUrl: './standard-reservation.component.html',
  styleUrls: ['./standard-reservation.component.css'],
  providers: [DatePipe]  // Ensure DatePipe is listed in providers
})
export class StandardReservationComponent {

  loggedUserData: any;
  constructor(private reservationService: ReservationService, private datePipe: DatePipe, private snackBar: MatSnackBar, private router: Router) {
    const localData = localStorage.getItem('hotelUser');
    if(localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  reservationData = {
    id: 0,
    clientEmail: "",
    roomInfos: [
      {
        roomType: "STANDARD",
        numberOfRooms: 1
      }
    ],
    checkInDate: null,
    numberOfNights: 1
  };

  createReservation() {
    this.reservationData.checkInDate = this.datePipe.transform(this.reservationData.checkInDate, 'yyyy-MM-dd');
    this.reservationData.id = this.generateRandomNumber(1,1000);
    this.reservationData.clientEmail = this.loggedUserData.email;
    this.reservationService.makeReservation(this.reservationData).subscribe(
      (response) => {
        console.log('Reservation created successfully:', response);
        this.showSuccessMessage('Operation successful!');
        setTimeout(() => {
          this.router.navigateByUrl('/reservations')
        }, 1500);
      },
      (error) => {
        console.error('Error creating reservation:', error);
        alert(error.error.message);
        // Handle the error and display an appropriate message to the user
      }
    );
  }

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  showSuccessMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 100000, // milliseconds
      panelClass: ['success-snackbar'] // Optional: Add a custom CSS class
    });
  }

}
