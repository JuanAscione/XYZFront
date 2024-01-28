import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  apiEndPoint: string = "http://localhost:8080/reservations/"
  constructor(private http: HttpClient) { }

  makeReservation(obj: any) {
    return this.http.post(this.apiEndPoint + 'makeReservation', obj);
  }

  getReservationsById(idClient: number){
    return this.http.get(`${this.apiEndPoint}client/${idClient}`);
  }

  deleteById(idReservation: number){
    return this.http.delete(`${this.apiEndPoint}${idReservation}`);
  }

  confirmReservation(idReservation: number){
    return this.http.put(`${this.apiEndPoint}${idReservation}/confirm-payment`, {});
  }

}
