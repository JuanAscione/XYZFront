import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  loggedUserData: any;
  constructor(private router: Router) {
    const localData = localStorage.getItem('hotelUser');
    if(localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

}
