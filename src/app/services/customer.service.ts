import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private url = environment.URL_CUSTOMERS;
  private authToken = environment.AUTH_TOKEN;

  constructor(private http: HttpClient) {}

  getCustomers() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authToken}`,
    });
    return this.http.get(this.url, { headers });
  }
}
