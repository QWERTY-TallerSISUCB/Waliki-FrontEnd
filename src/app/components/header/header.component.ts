import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';

import myAppConfig from '../../config/my-app-config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean = false;
  oktaSignin: any;
  constructor(private oktaAuthService: OktaAuthService) {
   }

  ngOnInit(): void {
     // Subscribe to authentication state changes
     this.oktaAuthService.$authenticationState.subscribe(
      (result) => {
        this.isAuthenticated = result;
      }
    );
  }

}
