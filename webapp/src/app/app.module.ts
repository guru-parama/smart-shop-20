import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './site/home-page/home-page.component';
import { SignupComponent } from './site/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './site/login/login.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductInfoComponent } from './product/product-info/product-info.component';
import { ProductSearchComponent } from './product/product-search/product-search.component';
import { UserComponent } from './site/user/user.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { DatePipe } from '@angular/common';
import { EditSuccessComponent } from './product/edit-success/edit-success.component';
import { BillComponent } from './product/bill/bill.component';
import { PurchaseHistoryComponent } from './site/purchase-history/purchase-history.component';
import { OfferAddComponent } from './product/offer-add/offer-add.component';
import { OfferUpdateComponent } from './product/offer-update/offer-update.component';
import { OfferInfoComponent } from './product/offer-info/offer-info.component';
import { ForgotPasswordComponent } from './site/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    SignupComponent,
    LoginComponent,
    ProductListComponent,
    ProductInfoComponent,
    ProductSearchComponent,
    UserComponent,
    ProductAddComponent,
    ProductEditComponent,
    EditSuccessComponent,
    BillComponent,
    PurchaseHistoryComponent,
    OfferAddComponent,
    OfferUpdateComponent,
    OfferInfoComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
