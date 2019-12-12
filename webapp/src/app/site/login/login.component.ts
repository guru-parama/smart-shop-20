import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFlag: boolean;
  statusFlag: boolean;
  rejectionFlag: boolean;
  constructor(private authenticateService: AuthenticateService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup ({
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });

    this.loginFlag = false;
  }
  goToForgotUserID(){
    this.router.navigate(['forgot-password','id']);
  }

  goToForgotPassword(){
    this.router.navigate(['forgot-password','password']);
  }
  login(){
    this.loginFlag = false;
    this.statusFlag = false;
    this.rejectionFlag = false;
    this.authenticateService.authenticate(this.loginForm.value.userName, this.loginForm.value.password)
      .subscribe(response => {
        this.authenticateService.setToken(response.token);
        this.authenticateService.setUserName(response.username);
        this.authenticateService.setUserType(response.userType);
        if(response.status == "A"){
           this.router.navigate(['product-list']);
           this.authService.login();
        }
        else if(response.status == "p"){
          this.statusFlag = true;
          this.authenticateService.logout();
        }
        else {
          this.rejectionFlag = true;
          this.authenticateService.logout();
        }
      },
      error =>{
        if(error.status==401)
        this.loginFlag = true;
      });
      
  
  }
}
