import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../common/order';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private baseUrl = 'https://localhost:9010/api/products';

  private categoryUrl = 'https://localhost:9010/api/product-category';

  constructor(private httpClient: HttpClient) {   }


  getOrderList(theUserId: number): Observable<Order[]> {

    // need to build URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByUserId?id=${theUserId}`;

    return this.getOrders(searchUrl);
  }
  private getOrders(searchUrl: string): Observable<Order[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.orders));
  }


}


interface GetResponseProducts {
  _embedded: {
    orders: Order[];
  },

}
