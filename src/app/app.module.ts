import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './crud/service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsingleComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    DashboardComponent,
    LoginComponent,
    OrdersComponent,
    SignupComponent,
    ProfileDetailsComponent,
    ForgotPasswordComponent,
    AddressComponent,
    EditAddressComponent,
    ComponentNameComponent,
    CatalogueComponent    
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
