import { Injectable } from '@angular/core';
import { Product } from '../model/product'; // Aca se importa las diferentes clases del package model para luego cuadrarlos con las API
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//const baseUrl = 'http://localhost:8082/catalogo'; //aca se llama a la API

@Injectable({providedIn: 'root'})
export class ProductService {
  //private baseUrl = 'http://localhost:8082/catalogo'; 
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  // Para mostrar el catalogo de productos
  
  
  /*catalogo() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServerUrl}/catalogo`);

  }*/
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/catalogo`);
  }

}
