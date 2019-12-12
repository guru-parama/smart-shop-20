import { Component, OnInit } from '@angular/core';
import { Bill } from './bill';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BillService } from '../bill.service';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product';
import { UserService } from 'src/app/site/user.service';
import { User } from 'src/app/site/user';
import { BillDetails } from './billDetails';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bill: Bill;
  productAddedList: any[] = [];
  product: any;
  billDetails: BillDetails[] = [];
  billForm:FormGroup;
  currentDate: string;
  productList: Product[];
  userList: User[];
  addFlag: boolean;
  discountedTotalAmount: any;
  generateFlag: boolean;

  constructor(private datePipe: DatePipe, private billService:BillService, private productService: ProductService, private router:Router, private userService: UserService) { 
    this.currentDate = this.datePipe.transform(new Date() , 'dd/MM/yyyy');

    userService.getAllUsersForBilling().subscribe(response =>{
      this.userList = response;
    })

    productService.getAllProduct().subscribe(response =>{
      this.productList = response;
    });
    this.billForm = new FormGroup({
      'userId': new FormControl("0", [Validators.required]),
      'purchaseDate': new FormControl(this.currentDate, [Validators.required]),
      'productCode': new FormControl('0', [Validators.required]),
      'quantity': new FormControl('1', [Validators.required])
    });
  }

  ngOnInit() {
    this.generateFlag = false;
  }

  onAddToBill(billForm){
    this.addFlag=false;
    for(let i=0; i< this.billDetails.length ; i++){
      if(this.billDetails[i].productId == billForm.value.productCode){
        this.addFlag = true;
      }
    }
    if(this.addFlag == false){
      this.billDetails.push({productId: billForm.value.productCode, quantity: billForm.value.quantity})
      this.productService.getProduct(billForm.value.productCode).subscribe(response =>{
        this.product = response;
        this.product["quantity"] = billForm.value.quantity;
        this.product["amount"] = (billForm.value.quantity * response. ratePerQuantity);
        this.productAddedList.push(this.product);
      })
    }
    
  }

  onGenerateBill(billForm){
    let productDetails: BillDetails[] = [];
    for( let i = 0; i < this.billDetails.length; i++){
      productDetails.push({productId: this.billDetails[i].productId,quantity: this.billDetails[i].quantity})
    }
    var dateParts = billForm.value.purchaseDate.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] -1 , +dateParts[0]); 
    let body = {
      userId: billForm.value.userId,
      purchaseDate: dateObject,
      productList: productDetails,
      billId: 0
    };
    this.billService.generateBill(body).subscribe(response =>{
      this.discountedTotalAmount = response.discountedTotal;
      this.generateFlag = true;
    });
  }

  onDropBill(){ 
    this.generateFlag = false;
    this.productAddedList = [];
  }

  getTotal(){
    let total: number = 0;
    this.productAddedList.forEach(resp =>{
      total += resp.amount;
    })
    return total;
  }
  deleteProduct(product){
    let index = this.productAddedList.indexOf(product);
    this.productAddedList.splice(index, 1);
    this.billDetails.splice(index, 1);
  }

}
