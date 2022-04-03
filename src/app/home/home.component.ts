import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../crud/service/producto.service";
import {ConsultaProducto} from "../crud/model/producto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
}
