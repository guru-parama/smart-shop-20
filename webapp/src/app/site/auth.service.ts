import { Injectable } from '@angular/core';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean;
  constructor(private authenticateService: AuthenticateService ) { }

  login(){
    this.loggedIn= true;
    }

  logout(){
    this.loggedIn= false;
    this.authenticateService.setToken(null);
  }

  isLoggedin(){
    return this.loggedIn;
  }
}
