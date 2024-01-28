import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import {DepositComponent} from "./pages/deposit/deposit.component";
import {UserDetailsComponent} from "./pages/user-details/user-details.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ReservationsComponent} from "./pages/reservations/reservations.component";
import {StandardReservationComponent} from "./pages/standard-reservation/standard-reservation.component";
import {SuiteReservationComponent} from "./pages/suite-reservation/suite-reservation.component";
import {SuperieureReservationComponent} from "./pages/superieure-reservation/superieure-reservation.component";


const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'deposit',
        component:DepositComponent
      },
      {
        path:'userDetails',
        component:UserDetailsComponent
      },
      {
        path:'reservations',
        component:ReservationsComponent
      },
      {
        path:'standardReservation',
        component:StandardReservationComponent
      },
      {
        path:'suiteReservation',
        component:SuiteReservationComponent
      },
      {
        path:'superieureReservation',
        component:SuperieureReservationComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
