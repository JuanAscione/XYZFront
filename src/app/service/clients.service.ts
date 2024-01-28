import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  apiEndPoint: string = "http://localhost:8080/api/clients"
  constructor(private http: HttpClient) { }

  login(obj: any) {
    return this.http.post(this.apiEndPoint + '/login', obj);
  }

  createClient(obj: any) {
    return this.http.post(this.apiEndPoint, obj);
  }

}
