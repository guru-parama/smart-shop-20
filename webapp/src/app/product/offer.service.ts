import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from '../site/authenticate.service';
import { Offer } from './offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor( private httpClient : HttpClient,
    private authenticateService: AuthenticateService) { }

  addOffer(offer){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.post<any[]>('http://10.230.166.184:8086/product-service/marthub/offer/'+offer.product ,offer ,  httpOption);
  }

  updateOffer(offer: Offer,id){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.put<any[]>('http://10.230.166.184:8086/product-service/marthub/offer/'+id ,offer ,  httpOption);
  }

  deleteOffer(id){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.delete('http://10.230.166.184:8086/product-service/marthub/offer/'+id ,  httpOption);
  }

  getOfferByDate(date){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.get<any[]>('http://10.230.166.184:8086/product-service/marthub/offer-list/'+date , httpOption);
  }

  getOfferById(id){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.get<any>('http://10.230.166.184:8086/product-service/marthub/offer/'+id , httpOption);
  }

  getCurrentOffer(){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.get<any>('http://10.230.166.184:8086/product-service/marthub/offer', httpOption);
  }
}
