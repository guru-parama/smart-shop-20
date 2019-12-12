import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from '../offer.service';
import { DatePipe } from '@angular/common';
import { Offer } from '../offer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-offer-info',
  templateUrl: './offer-info.component.html',
  styleUrls: ['./offer-info.component.css']
})
export class OfferInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private offerService: OfferService, private datePipe: DatePipe, private productService: ProductService) { }
  offer: Offer;
  offerForm: FormGroup;
  productList: Product[];
  errorMessage: string;
  errorFlag:boolean;

  ngOnInit() {
    this.errorFlag = false;
    this.offerForm = new FormGroup({
      'offerPercentage': new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      'offerDetails': new FormControl('', [Validators.required])
    });
    this.route.paramMap.subscribe(params => {
      this.offerService.getOfferById(params.get('id')).subscribe((response) => {
        this.offer = response;
        let offerDate = this.datePipe.transform(this.offer.offerDate , 'dd/MM/yyyy');
        this.productService.getAllProduct().subscribe(response =>{
          this.productList = response;
        });
        this.offerForm = new FormGroup({
          'offerPercentage': new FormControl(this.offer.offerPercentage, [Validators.required, Validators.pattern('[0-9]+')]),
          'offerDetails': new FormControl(this.offer.offerDetails, [Validators.required])
        });
      });
      });
  }

  update(offerForm){
    this.offer.offerDetails = offerForm.value.offerDetails;
    this.offer.offerPercentage = offerForm.value.offerPercentage;
    this.offerService.updateOffer(this.offer, this.offer.productId.id).subscribe(response=>{
    }, error =>{
      this.errorMessage = error.error.message;
      this.errorFlag = true;
    });
  }
}
