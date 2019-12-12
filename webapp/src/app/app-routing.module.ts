import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './site/home-page/home-page.component';
import { SignupComponent } from './site/signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AuthGuard } from './site/auth.guard';
import { UserComponent } from './site/user/user.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { EditSuccessComponent } from './product/edit-success/edit-success.component';
import { BillComponent } from './product/bill/bill.component';
import { PurchaseHistoryComponent } from './site/purchase-history/purchase-history.component';
import { OfferAddComponent } from './product/offer-add/offer-add.component';
import { OfferUpdateComponent } from './product/offer-update/offer-update.component';
import { OfferInfoComponent } from './product/offer-info/offer-info.component';
import { ForgotPasswordComponent } from './site/forgot-password/forgot-password.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'home', component: HomePageComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'product-list', component: ProductListComponent, canActivate: [AuthGuard]},
  {path:'user-list', component: UserComponent, canActivate: [AuthGuard]},
  {path:'product-edit/:id', component: ProductEditComponent, canActivate: [AuthGuard]},
  {path:'edit-success', component: EditSuccessComponent, canActivate: [AuthGuard]},
  {path:'product-add', component: ProductAddComponent, canActivate: [AuthGuard]},
  {path:'bill', component: BillComponent, canActivate: [AuthGuard]},
  {path:'purchase-history', component: PurchaseHistoryComponent, canActivate: [AuthGuard]},
  {path:'offer-add', component: OfferAddComponent, canActivate: [AuthGuard]},
  {path:'offer-update', component: OfferUpdateComponent, canActivate: [AuthGuard]},
  {path:'offer-info/:id', component: OfferInfoComponent, canActivate: [AuthGuard]},
  {path:'forgot-password/:forgot', component: ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
