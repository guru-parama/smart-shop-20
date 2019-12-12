import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
    private authenticateService: AuthenticateService) { }

  addUser(newUser: User){
    newUser.id = 0;
    return this.httpClient.post<User>('http://10.230.166.184:8086/registeration-service/marthub/register', newUser);
  }

  getAllUsers(){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.get<any[]>('http://10.230.166.184:8086/registeration-service/marthub/users', httpOption);
  }

  approve(user:User) {
    user.status = "A";
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.put<User>('http://10.230.166.184:8086/registeration-service/marthub/users', user, httpOption);
  }

  reject(user:User) {
    user.status = "D";
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.put<User>('http://10.230.166.184:8086/registeration-service/marthub/users', user, httpOption);
  }

  getAllUsersForBilling(){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.get<any>('http://10.230.166.184:8086/registeration-service/marthub/users-billing', httpOption);
  }

  getUserByUserID(id){
    return this.httpClient.get<User>('http://10.230.166.184:8086/registeration-service/marthub/users/'+id);

  }

  getUserByContactNumber(number){
    return this.httpClient.get<User>('http://10.230.166.184:8086/registeration-service/marthub/users-contact/'+number);
  }

  updateUserWithNewPassword(user: User){
    return this.httpClient.put<User>('http://10.230.166.184:8086/registeration-service/marthub/users/pwdchange', user);
  }

}
