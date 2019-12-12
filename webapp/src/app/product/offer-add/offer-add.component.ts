import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.css']
})
export class OfferAddComponent implements OnInit {

  addOfferForm: FormGroup;
  productList: Product[];
  product: Product;
  errorMessage: string;
  errorFlag: boolean;
  offerAddFlag:boolean;
  constructor(private datePipe: DatePipe, private productService: ProductService, private offerService: OfferService) { }

  ngOnInit() {
    this.errorFlag = false;
    this.offerAddFlag = false;
    this.productService.getAllProduct().subscribe(response =>{
      this.productList = response;
    });

    let addDate = this.datePipe.transform(new Date , 'dd/MM/yyyy');
    this.addOfferForm = new FormGroup({
      offerDate: new FormControl(addDate, [Validators.required, Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
      offerPercentage: new FormControl('', [Validators.required]),
      offerDetails: new FormControl('', [Validators.required]),
      product: new FormControl('', [Validators.required]),
    });
  }

  addOffer(addOfferForm){
    var dateParts = addOfferForm.value.offerDate.split("/");
    var addDateObject = new Date(+dateParts[2], dateParts[1] -1 , +dateParts[0] ); 
    addOfferForm.value.offerDate = addDateObject;
      this.offerService.addOffer(addOfferForm.value).subscribe(response =>{
        this.offerAddFlag = true;
        this.errorFlag = false;
      }, error =>{
        this.errorMessage = error.error.message;
        this.errorFlag = true;
      }
      );
  
  }

}
