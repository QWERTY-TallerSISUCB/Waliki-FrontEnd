import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataNumber } from 'src/app/common/data-number';
import { DataStringNumber } from 'src/app/common/data-string-number';
import { DataStringStringNumber } from 'src/app/common/data-string-string-number';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  //private baseUrl = 'https://localhost:8443/ms-dashboard/api/dashboard';

  private baseUrl = 'https://localhost:9030/api/dashboard';

  constructor(private httpClient: HttpClient) { }


  getDashboardQuantitySellsbyMonthCategory(): Observable<DataStringStringNumber> {
    // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/productsellsbycategoryandmonth`;
    console.log("dashboard getDashboardQuantitySellsbyMonthCategory");
    return this.httpClient.get<DataStringStringNumber>(dashboardUrl);
  }
  getDashboardCategory(): Observable<DataStringNumber> {
    // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/productbycategory`;
    console.log("dashboard getDashboardCategory");
    return this.httpClient.get<DataStringNumber>(dashboardUrl);
  }
  getDashboardProductSells(): Observable<DataStringNumber> {
    // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/productsells`;
    console.log("dashboard getDashboardProductSells");
    return this.httpClient.get<DataStringNumber>(dashboardUrl);
  }
  getDashboardOffStock(): Observable<DataNumber> {
    // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/productsinstock`;
    console.log("dashboard getDashboardOffStock");
    return this.httpClient.get<DataNumber>(dashboardUrl);
  }
  getDashboardSellsbyMonth(): Observable<DataStringNumber> {
   // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/moneysellsbymonth`;
    console.log("dashboard getDashboardSellsbyMonth");
    return this.httpClient.get<DataStringNumber>(dashboardUrl);
  }
  getDashboardWithStock(): Observable<DataNumber> {
    // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/productconstock`;
    console.log("dashboard getDashboardWithStock");
    return this.httpClient.get<DataNumber>(dashboardUrl);
  }
  getProducsSellbyMonth(): Observable<DataStringNumber> {
    // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/productsellsbymonth`;
    console.log("dashboard getProducsSellbyMonth");
    return this.httpClient.get<DataStringNumber>(dashboardUrl);
  }
  getQuantityofOrders(): Observable<DataNumber> {
    // need to build URL based on dashboard URL
    const dashboardUrl = `${this.baseUrl}/quantityoforders`;
    console.log("dashboard getQuantityofOrders");
    return this.httpClient.get<DataNumber>(dashboardUrl);
  }

  // private getDashboards(searchUrl: string): Observable<Dashboard[]> {
  //   return this.httpClient.get<GetResponseDashboards>(searchUrl).pipe(map(response => response._embedded.products));
  // }

}

// interface GetResponseDashboards {
//   _embedded: {
//     d: Dashboard[];
//   }
// }
