import { Component, OnInit } from '@angular/core';
import { ProductService } from '../crud/service/product.service';
import { Product } from '../crud/model/producto'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  public productt?: Product[];
  constructor(private producttService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  public getProducts(): void {
    this.producttService.getProducts().subscribe(
      (response: Product[]) => {
        this.productt = response;
        console.log(this.productt);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
