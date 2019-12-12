import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticateService } from 'src/app/site/authenticate.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  @Output() searchEmitter: any;
  @Output() sortEmitter: any;

  searchString: String;
  sortType: string;
  userType: string;

  constructor(private authenticateService: AuthenticateService) {
    this.searchEmitter = new EventEmitter();
    this.sortEmitter = new EventEmitter();
   }

  ngOnInit() {
    this.userType = this.authenticateService.getUserType();
  }

  filter(){
    this.searchEmitter.emit(this.searchString);
  }
  sort(){
    this.sortEmitter.emit(this.sortType);
  }
}
