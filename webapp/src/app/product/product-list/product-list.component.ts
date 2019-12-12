import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { AuthenticateService } from 'src/app/site/authenticate.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  userType: string;
  productList: Product[];
  filteredList: Product[];
  constructor(private productService: ProductService, private authenticateService: AuthenticateService) { }

  ngOnInit() {
    this.userType = this.authenticateService.getUserType();
    this.productService.getAllProduct().subscribe(response=>{
      this.productList = response;
      this.filteredList = this.productList;
  });
  }

  deleteProduct($event){
    this.productService.deleteProduct($event).subscribe(response =>{
      this.ngOnInit();
    });
  }

  fillterData($event){
    this.filteredList = this.productList.filter((product: Product) => 
              product.name
                      .toLocaleLowerCase()
                      .indexOf($event) != -1
    );
  }

  sort($event){
    if($event == "name"){
      this.filteredList =   this.filteredList.sort((obj1, obj2) => {
        if (obj1.name > obj2.name) {
            return 1;
        }
        if (obj1.name < obj2.name) {
            return -1;
        }
        return 0;
    });
    }
    if($event == "price"){
      this.filteredList =   this.filteredList.sort((obj1, obj2) => {
        if (obj1.ratePerQuantity > obj2.ratePerQuantity) {
            return 1;
        }
        if (obj1.ratePerQuantity < obj2.ratePerQuantity) {
            return -1;
        }
        return 0;
    });
    }
    if($event == "stock"){
      this.filteredList =   this.filteredList.sort((obj1, obj2) => {
        if (obj1.stockCount > obj2.stockCount) {
            return 1;
        }
        if (obj1.stockCount < obj2.stockCount) {
            return -1;
        }
        return 0;
    });
    }
    if($event == "popular"){
      this.productService.getProductByPopularity().subscribe(response =>{
        this.filteredList = response;
      })
    }
  }
}
