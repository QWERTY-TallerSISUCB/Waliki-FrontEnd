import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {


  isAuthenticated: boolean = false;
  address: string;

  storage: Storage = sessionStorage;

  constructor(private oktaAuthService: OktaAuthService) { }

  ngOnInit(): void {
    // Subscribe to authentication state changes
    this.oktaAuthService.$authenticationState.subscribe(
      (result) => {
        this.isAuthenticated = result;
        this.getUserAddress();
      }
    );
  }


  getUserAddress() {
    if (this.isAuthenticated) {

      // Fetch the logged in user details (user's claims)
      //
      // user full name is exposed as a property name
      this.oktaAuthService.getUser().then(
        (res) => {
          this.address = res.locale;
          //retrieve the user's eam
          const theEmail = res.email;
          console.log("address"+this.address)
          this.storage.setIten('userEmail',JSON.stringify(theEmail));

        }
      );
    }
    console.log("address"+this.address)
  }

}
