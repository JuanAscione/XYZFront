import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  apiEndPoint: string = "http://localhost:8080/api/wallets/"
  constructor(private http: HttpClient) { }

  createWallet(idClient: number, obj: any) {
    return this.http.post(`${this.apiEndPoint}create/${idClient}`, obj);
  }

  deposit(obj: any) {
    return this.http.post(`${this.apiEndPoint}deposit`, obj);
  }

  checkBalance(idClient: number) {
    return this.http.get(`${this.apiEndPoint}balance/${idClient}`);
  }

}
