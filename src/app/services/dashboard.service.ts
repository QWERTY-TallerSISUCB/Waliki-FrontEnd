import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashUrl1 = 'https://localhost:8443/api/dashboard/1';
  private dashUrl2 = 'https://localhost:8443/api/dashboard/2';
  private dashUrl3 = 'https://localhost:8443/api/dashboard/3';
  private dashUrl4 = 'https://localhost:8443/api/dashboard/4';


  constructor(private httpClient: HttpClient) { }


  getProduct(theProductId: number): Observable<Product> {

    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }
  
}
