import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  editProductForm: FormGroup;
  product: Product;
  addDate:string;
  dateOfManufacture: string;
  dateOfExpiry: string;

  constructor(private router: ActivatedRoute,private productService: ProductService , private datePipe: DatePipe, private route: Router) { 
    this.editProductForm = new FormGroup({
      'id': new FormControl('', [Validators.required]),
      'code': new FormControl('', [Validators.required]),
      'name': new FormControl('', [Validators.required]),
      'type': new FormControl('', [Validators.required]),
      'brand': new FormControl('', [Validators.required]),
      'quantityType': new FormControl('', [Validators.required,]),
      'ratePerQuantity': new FormControl('', [Validators.required]),
      'stockCount': new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      'addDate': new FormControl('', [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
      'aisle': new FormControl('', [Validators.required,Validators.pattern('[0-9]+')]),
      'shelf': new FormControl('', [Validators.required,Validators.pattern('[0-9]+')]),
      'dateOfManufacture': new FormControl('', [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
      'dateOfExpiry': new FormControl('', [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
      'image': new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {

    this.router.paramMap.subscribe(params => {
      this.productService.getProduct(params.get('id')).subscribe((response) => {
        this.product = response;
        this.addDate = this.datePipe.transform(this.product.addDate , 'dd/MM/yyyy');
        this.dateOfManufacture = this.datePipe.transform(this.product.dateOfManufacture , 'dd/MM/yyyy');
        this.dateOfExpiry = this.datePipe.transform(this.product.dateOfExpiry , 'dd/MM/yyyy');

        this.editProductForm = new FormGroup({
          'id': new FormControl(this.product.id, [Validators.required]),
          'code': new FormControl(this.product.code, [Validators.required]),
          'name': new FormControl(this.product.name, [Validators.required]),
          'type': new FormControl(this.product.type, [Validators.required]),
          'brand': new FormControl(this.product.brand, [Validators.required]),
          'quantityType': new FormControl(this.product.quantityType, [Validators.required]),
          'ratePerQuantity': new FormControl(this.product.ratePerQuantity, [Validators.required, Validators.pattern('[0-9]+')]),
          'stockCount': new FormControl(this.product.stockCount, [Validators.required, Validators.pattern('[0-9]+')]),
          'addDate': new FormControl(this.addDate, [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
          'aisle': new FormControl(this.product.aisle, [Validators.required, Validators.pattern('[0-9]+')]),
          'shelf': new FormControl(this.product.shelf, [Validators.required, Validators.pattern('[0-9]+')]),
          'dateOfManufacture': new FormControl(this.dateOfManufacture, [Validators.required, Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
          'dateOfExpiry': new FormControl(this.dateOfExpiry, [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
          'image': new FormControl(this.product.image, [Validators.required])
        });
      });
      });
  }
  onSubmit(editProductForm){
    this.productService.editProduct(editProductForm.value).subscribe((response)=>{
      this.route.navigate(['edit-success']);
    })
  }

}
