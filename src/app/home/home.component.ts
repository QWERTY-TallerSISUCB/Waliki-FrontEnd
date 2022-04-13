import { Component, OnInit } from '@angular/core';
import { ProductService } from '../crud/service/product.service';
import { Product } from '../crud/model/product'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productt?: Product[];

  constructor(private producttService: ProductService) { }
  
  //constructor(){}
  
  ngOnInit(): void{
    //this.getProducts();
  }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
/*
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
}*/

  addToCart() {

  console.log(`Adding to cart: ${this.product.name}, ${this.product.unitPrice}`);
  const theCartItem = new CartItem(this.product);
  this.cartService.addToCart(theCartItem);
  
}

}
