import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BillService } from 'src/app/product/bill.service';
import { AuthenticateService } from '../authenticate.service';
import { Bill } from 'src/app/product/bill/bill';
import { ProductService } from 'src/app/product/product.service';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  productList: any[];
  detailsFlag: boolean;
  currentBillId: number = 0;
  constructor(private billService: BillService, private authenticateService: AuthenticateService, private productService: ProductService) { }

  billDetails: any[];
  ngOnInit() {
    this.billService.getBill(this.authenticateService.getUserName()).subscribe(response => {
      this.billDetails = response;
      this.billDetails.forEach(resp =>{
        resp.billDetailsList.forEach(resp1 =>{
          this.productService.getProduct(resp1.productId).subscribe(response1 =>{
            resp1['productDetails'] = response1;
          })
        })
      })
    })
  }

  getProductDetails(billDetailsList: any[]){
    this.detailsFlag = true;
    let i = 0;
    this.productList = [];
    billDetailsList.forEach(resp =>{
      this.productList.push(resp.productDetails);
    })
    for(let i=0; i<billDetailsList.length ; i++){
      this.productList[i]['quantity'] = billDetailsList[i].quantity;
    }


  }

}
