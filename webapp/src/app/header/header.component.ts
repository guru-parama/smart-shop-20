import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../site/authenticate.service';
import { Router } from '@angular/router';
import { AuthService } from '../site/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticateService: AuthenticateService, private router: Router, private authSerive: AuthService) { }

  ngOnInit() {
  }

  getUserType(){
    return this.authenticateService.getUserType();
  }

  getUserName(){
    return this.authenticateService.getUserName();
  }

  logout(){
    this.router.navigate(['home']);
    this.authSerive.logout();
    this.authenticateService.logout();
  }
}
