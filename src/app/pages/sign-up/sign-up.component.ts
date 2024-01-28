// signup.component.ts

import { Component } from '@angular/core';
import {ClientsService} from "../../service/clients.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupData = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: ''
  };

  constructor(private clientService: ClientsService, private router: Router){
  }

  onSignUp() {
    this.clientService.createClient(this.signupData).subscribe((res:any)=>{
        console.log(res);
        if(res) {
          localStorage.setItem('hotelUser',JSON.stringify(res));
          alert('Your secret password to log in is ' + res.randomPassword);
          setTimeout(() => {
            this.router.navigateByUrl('/dashboard');
          }, 5000);
        } else {
          alert('Check User Credentials')
        }
      },
      error=> {
        console.log(error);
        alert(error.error);
      })
  }
}
