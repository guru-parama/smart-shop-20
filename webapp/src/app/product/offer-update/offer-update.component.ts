import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { OfferService } from '../offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-update',
  templateUrl: './offer-update.component.html',
  styleUrls: ['./offer-update.component.css']
})
export class OfferUpdateComponent implements OnInit {

  updateOfferForm: FormGroup;
  currentDate: string;
  offerList: any[] = [];
  deleteFlag: boolean;
  fetchFlag: boolean;

  constructor(private datePipe: DatePipe, private offerService: OfferService, private router: Router) { }

  ngOnInit() {
    this.deleteFlag = false;
    this.fetchFlag = false;
    this.currentDate = this.datePipe.transform(new Date() , 'dd/MM/yyyy');
    this.updateOfferForm = new FormGroup({
      'offerDate': new FormControl(this.currentDate, [Validators.required, Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
    });
  }

  fetchOffer(updateOfferForm){
    this.offerService.getOfferByDate(updateOfferForm.value.offerDate).subscribe(response =>{
      this.offerList = response;
      this.fetchFlag = true;
    });
  }
  edditOffer(id){
    this.router.navigate(['offer-info',id]);
  }

  deleteOffer(id){
    this.offerService.deleteOffer(id).subscribe(response =>{
      this.deleteFlag = true;
      this.offerService.getOfferByDate(this.updateOfferForm.value.offerDate).subscribe(response =>{
        this.offerList = response;
      });
    });
  }
}
