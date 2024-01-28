import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DepositComponent } from './pages/deposit/deposit.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { StandardReservationComponent } from './pages/standard-reservation/standard-reservation.component';
import { SuiteReservationComponent } from './pages/suite-reservation/suite-reservation.component';
import { SuperieureReservationComponent } from './pages/superieure-reservation/superieure-reservation.component';
import {DatePipe} from "@angular/common";
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    DepositComponent,
    UserDetailsComponent,
    SignUpComponent,
    ReservationsComponent,
    StandardReservationComponent,
    SuiteReservationComponent,
    SuperieureReservationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
