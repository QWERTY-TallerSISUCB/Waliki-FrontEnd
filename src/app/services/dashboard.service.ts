import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../common/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = 'https://localhost:8443/ms-dashboard/api/dashboard';

  constructor(private httpClient: HttpClient) { }

  getDashboardCategory(theProductId: number): Observable<Dashboard> {
    // need to build URL based on product id
    const dashboardUrl = `${this.baseUrl}/prendasporcategoria`;
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardMostSell(theProductId: number): Observable<Dashboard> {
    // need to build URL based on product id
    const dashboardUrl = `${this.baseUrl}/prendasmes`;
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardOrders(theProductId: number): Observable<Dashboard> {
    // need to build URL based on product id
    const dashboardUrl = `${this.baseUrl}/ordenesmes`;
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardOffStock(theProductId: number): Observable<Dashboard> {
    // need to build URL based on product with stock
    const dashboardUrl = `${this.baseUrl}/prendassinstock`;
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardSell(theProductId: number): Observable<Dashboard> {
    // need to build URL based on product with stock
    const dashboardUrl = `${this.baseUrl}/montomes`;
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardWithStock(theProductId: number): Observable<Dashboard> {
    // need to build URL based on product with stock
    const dashboardUrl = `${this.baseUrl}/prendasconstock`;
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }

}
