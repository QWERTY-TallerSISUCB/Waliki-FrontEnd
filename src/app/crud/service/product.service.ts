import { Injectable } from '@angular/core';
import { ConsultaProducto } from '../model/producto'; // Aca se importa las diferentes clases del package model para luego cuadrarlos con las API
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8082/catalogo'; //aca se llama a la API

@Injectable({providedIn: 'root'})
export class ProductService {
  //private baseUrl = 'http://localhost:8082/catalogo'; 
  constructor(private http: HttpClient) { }
  // Para mostrar el catalogo de productos
  
  
  public catalogo() : Observable<ConsultaProducto[]>{
    return this.http.get<ConsultaProducto[]>(baseUrl);
  }

}