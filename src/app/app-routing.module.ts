import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SearchComponent } from './search/search.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerupdateproductComponent } from './sellerupdateproduct/sellerupdateproduct.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"Seller-auth",
    component:SellerAuthComponent
  },
  {
    path:"seller-home",
    component:SellerHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"seller-add-product",
    component:SellerAddProductComponent,
    canActivate:[AuthGuard]

  },
  {
    path:"sellerupdateproduct/:id",
    component:SellerupdateproductComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"search/:query",
    component:SearchComponent
  },
  {
    path:"productdetails/:id",
    component:ProductdetailsComponent
  },
  {
    path:"user-auth",
    component:UserAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
