import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  @Input() productDetails: any;
  @Input() userType: any;
  @Output() deleteEmitter: any;

  offerList: any[];

  constructor(private router: Router, private offerService: OfferService ) { 
    this.deleteEmitter = new EventEmitter();
  }

  ngOnInit() {
    this.offerService.getCurrentOffer().subscribe(response => {
      this.offerList = response;
    })    
  }

  edit(id){
    this.router.navigate(['product-edit',id]);
  }

  deleteProduct(id){
    this.deleteEmitter.emit(id);
  }
}
