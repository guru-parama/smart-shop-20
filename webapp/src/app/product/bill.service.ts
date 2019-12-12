import { Injectable } from '@angular/core';
import { AuthenticateService } from '../site/authenticate.service';
import { Bill } from './bill/bill';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticateService) { }

  generateBill(bill: any){
    let token = 'Bearer ' + this.authenticationService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    }
    return this.httpClient.post<any>("http://10.230.166.184:8086/product-service/marthub/bills", bill, httpOptions);

  }

  getBill(id){
    let token = 'Bearer ' + this.authenticationService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    }
    return this.httpClient.get<any>("http://10.230.166.184:8086/product-service/marthub/bills/"+id, httpOptions);
  }
}
