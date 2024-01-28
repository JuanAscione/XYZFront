import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/service/clients.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginObj: any = {
    "email": "",
    "password": ""
  };
  constructor(private roomSrv: ClientsService, private router: Router){

  }

  onLogin() {
    this.roomSrv.login(this.loginObj).subscribe((res:any)=>{
      console.log(res);
      if(res) {
        localStorage.setItem('hotelUser',JSON.stringify(res));
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('Check User Credentials')
      }
    },
    error=> {

    })
  }


}
