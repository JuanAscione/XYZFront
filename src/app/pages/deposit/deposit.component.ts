// deposit.component.ts

import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {WalletService} from "../../service/wallet.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {

  loggedUserData: any;
  constructor(private router: Router, private walletService: WalletService, private snackBar: MatSnackBar) {
    const localData = localStorage.getItem('hotelUser');
    if(localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }
    this.getBalance();
  }

  depositObj: any = {
    "idClient": "",
    "amount": "",
    "currency": ""
  };

  amount: number = 0;
  currency: string = 'EUR'; // Default currency
  balance: number = 0;

  onDeposit() {
    this.depositObj.idClient = this.loggedUserData.id;
    this.walletService.deposit(this.depositObj).subscribe(
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
        console.error('Error:', error);
      }
    );
  }

  showSuccessMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 100000, // milliseconds
      panelClass: ['success-snackbar'] // Optional: Add a custom CSS class
    });
  }

  increaseAmount() {
    this.amount += 1;
  }

  decreaseAmount() {
    if (this.amount > 0) {
      this.amount -= 1;
    }
  }

  private getBalance() {
    this.walletService.checkBalance(this.loggedUserData.id).subscribe(
      (res: any) => {
        if (res) {
          this.balance = res.balance;
        } else {
          console.log('Response is empty or null');
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
