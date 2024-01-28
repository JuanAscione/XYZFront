import { Component } from '@angular/core';
import {ClientsService} from "../../service/clients.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router){
  }

  standardRoom() {
    this.router.navigateByUrl('/standardReservation');
  }

  superiorRoom() {
    this.router.navigateByUrl('/superieureReservation');
  }

  suiteRoom() {
    this.router.navigateByUrl('/suiteReservation');
  }
}
