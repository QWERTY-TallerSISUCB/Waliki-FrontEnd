import { Component, OnInit } from '@angular/core';
import {ConsultaProducto} from "../crud/model/producto";
import {ProductoService} from "../crud/service/producto.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  producto : Array <ConsultaProducto> = [];
  constructor( public productoService: ProductoService) { }
  ngOnInit(): void {
    this.productos;
  }
  productos(){
    this.productoService.catalogo().subscribe(
      data => {
        this.producto = data.response;

        console.log(data);
      },
      err => {
        console.log(err.error);
      }
    );
  }
}
