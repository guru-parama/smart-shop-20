import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private productService: ProductService, private router:Router) { }
  addProductForm: FormGroup;
  ngOnInit() {
    this.addProductForm = new FormGroup({
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      quantityType: new FormControl('', [Validators.required]),
      ratePerQuantity: new FormControl('', [Validators.required]),
      stockCount: new FormControl('', [Validators.required]),
      addDate: new FormControl('', [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
      aisle: new FormControl('', [Validators.required]),
      shelf: new FormControl('', [Validators.required]),
      dateOfManufacture: new FormControl('', [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
      dateOfExpiry: new FormControl('', [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
      image: new FormControl('', [Validators.required])
    });
  }

  onSubmit(addProductForm){
    console.log(addProductForm);
    this.productService.addProduct(addProductForm.value).subscribe((response)=>{
      this.router.navigate(['product-list']);
    })
  }

}
