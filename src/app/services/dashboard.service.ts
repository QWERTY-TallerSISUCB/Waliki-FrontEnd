import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../common/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = 'https://localhost:9030/api/dashboard';


  constructor(private httpClient: HttpClient) { }


  getProduct(theProductId: number): Observable<Dashboard> {

    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Dashboard>(productUrl);
  }

}
