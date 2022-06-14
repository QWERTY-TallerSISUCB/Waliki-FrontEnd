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
    // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/prendasporcategoria`;
    console.log("dashboard category");
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardMostSell(): Observable<Dashboard> {
    // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/prendasmes`;
    console.log("dashboard getDashboardMostSell");
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardOrders(): Observable<Dashboard> {
    // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/ordenesmes`;
    console.log("dashboard getDashboardOrders");
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardOffStock(): Observable<Dashboard> {
    // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/prendassinstock`;
    console.log("dashboard getDashboardOffStock");
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardSell(): Observable<Dashboard> {
   // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/montomes`;
    console.log("dashboard getDashboardSell");
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }
  getDashboardWithStock(): Observable<Dashboard> {
    // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/prendasconstock`;
    console.log("dashboard getDashboardWithStock");
    return this.httpClient.get<Dashboard>(dashboardUrl);
  }

  private getDashboards(searchUrl: string): Observable<Dashboard[]> {
    return this.httpClient.get<GetResponseDashboards>(searchUrl).pipe(map(response => response._embedded.products));
  }

}

interface GetResponseDashboards {
  _embedded: {
    products: Dashboard[];
  }
}
