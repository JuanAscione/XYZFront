import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  loggedUserData: any;
  constructor(private router: Router) {
    const localData = localStorage.getItem('hotelUser');
    if(localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  onMenuChange(event: any) {
    const selectedOption = event.target.value;
    switch (selectedOption) {
      case 'logoff':
        this.onLogoff();
        break;
      case 'deposit':
        this.onDeposit();
        break;
      case 'details':
        this.onDetails();
        break;
      default:
        break;
    }
  }

  onLogoff() {
    localStorage.removeItem('hotelUser');
    this.loggedUserData = undefined;
    this.router.navigateByUrl('/login')
  }

  onDeposit() {
    this.router.navigateByUrl('/deposit')
  }

  onDetails() {
    this.router.navigateByUrl('/userDetails')
  }

}
