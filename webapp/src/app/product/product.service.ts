import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from '../site/authenticate.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient
    , private authenticateService: AuthenticateService) {
}

  getAllProduct(){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.get<any[]>('http://10.230.166.184:8086/product-service/marthub/product-list', httpOption);
  }

  getNewProduct(){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.get<any[]>('http://10.230.166.184:8086/product-service/marthub/product-list/new', httpOption);
  }

  addProduct(product: any){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    var dateParts = product.addDate.split("/");
    var addDateObject = new Date(+dateParts[2], dateParts[1] -1 , +dateParts[0] ); 
    var dateParts =product.dateOfManufacture.split("/");
    var dateOfManufactureObject = new Date(+dateParts[2], dateParts[1] -1 , +dateParts[0] ); 
    var dateParts =product.dateOfExpiry.split("/");
    var dateOfExpiryObject = new Date(+dateParts[2], dateParts[1] -1 , +dateParts[0] ); 
    let body = {
      code: product.code,
      name: product.name,
      type: product.type,
      brand: product.brand,
      quantityType: product.quantityType,
      ratePerQuantity: product.ratePerQuantity,
      stockCount: product.stockCount,
      addDate: addDateObject,
      aisle: product.aisle,
      shelf: product.shelf,
      dateOfManufacture: dateOfManufactureObject,
      dateOfExpiry: dateOfExpiryObject,
      image: product.image
    };
    return this.httpClient.post<any[]>('http://10.230.166.184:8086/product-service/marthub/product-list', body, httpOption);
  }

  getProduct(id: any){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.get<any>('http://10.230.166.184:8086/product-service/marthub/product-list/'+id, httpOption);
  }

  getProductByPopularity(){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.get<any>('http://10.230.166.184:8086/product-service/marthub/product-list/sort-by-popularity', httpOption);
  }

  deleteProduct(id: any){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.delete<any[]>('http://10.230.166.184:8086/product-service/marthub/product-list/'+id, httpOption);
  }

  editProduct(product: any){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    var dateParts = product.addDate.split("/");
    var addDateObject = new Date(+dateParts[2], dateParts[1] -1 , +dateParts[0] ); 
    var dateParts =product.dateOfManufacture.split("/");
    var dateOfManufactureObject = new Date(+dateParts[2], dateParts[1] -1 , +dateParts[0] ); 
    var dateParts =product.dateOfExpiry.split("/");
    var dateOfExpiryObject = new Date(+dateParts[2], dateParts[1] -1 , +dateParts[0] ); 
    let body = {
      id: product.id,
      code: product.code,
      name: product.name,
      type: product.type,
      brand: product.brand,
      quantityType: product.quantityType,
      ratePerQuantity: product.ratePerQuantity,
      stockCount: product.stockCount,
      addDate: addDateObject,
      aisle: product.aisle,
      shelf: product.shelf,
      dateOfManufacture: dateOfManufactureObject,
      dateOfExpiry: dateOfExpiryObject,
      image: product.image
    };
    return this.httpClient.put<any>('http://10.230.166.184:8086/product-service/marthub/product-list/',body , httpOption);
  }
}
