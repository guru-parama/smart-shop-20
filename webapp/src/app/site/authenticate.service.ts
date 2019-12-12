import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private authenticationApiUrl = 'http://10.230.166.184:8086/userauth-service/marthub/authenticate';
  private token: string;
  private userType: string;
  private userName: string;
  constructor(private httpClient: HttpClient) {
   }
  
   authenticate(user: string, password: string): Observable<any>{
    let credentials = btoa(user + ':' + password);
     let headers = new HttpHeaders();
     headers = headers.set('Authorization', 'Basic ' + credentials);
     return this.httpClient.get(this.authenticationApiUrl, {headers});
   }
   public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }

  public getUserName(){
    return this.userName;
  }

  public setUserName(name: string){
    this.userName = name;
  }

  public getUserType(){
    return this.userType;
  }

  public setUserType(userType: string){
    this.userType = userType;
  }

  logout(){
    this.userType = null;
    this.userName = null;
  }
}
