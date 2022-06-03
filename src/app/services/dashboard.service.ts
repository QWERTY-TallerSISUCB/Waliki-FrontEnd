import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../common/dashboard';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  //private baseUrl = 'https://localhost:8443/ms-dashboard/api/dashboard';

  private baseUrl = 'https://localhost:9030/api/dashboard';

  constructor(private httpClient: HttpClient) { }

  getDashboardCategory(): Observable<Dashboard> {
    // need to build URL based on product id
    const dashboardUrl = `${this.baseUrl}/prendasporcategoria`;
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardMostSell(): Observable<Dashboard> {
    // need to build URL based on product id
    const dashboardUrl = `${this.baseUrl}/prendasmes`;
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardOrders(): Observable<Dashboard> {
    // need to build URL based on product id
    const dashboardUrl = `${this.baseUrl}/ordenesmes`;
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardOffStock(): Observable<Dashboard> {
    // need to build URL based on product with stock
    const dashboardUrl = `${this.baseUrl}/prendassinstock`;
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardSell(): Observable<Dashboard> {
    // need to build URL based on product with stock
    const dashboardUrl = `${this.baseUrl}/montomes`;
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardWithStock(): Observable<Dashboard> {
    // need to build URL based on product with stock
    const dashboardUrl = `${this.baseUrl}/prendasconstock`;
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }

}

interface GetResponseDashboards {
  _embedded: {
    products: Dashboard[];
  }
}
