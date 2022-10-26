import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent } from '../app/login/login.component';
import {RegisterComponent } from '../app/register/register.component';
import { OrdersComponent} from '../app/orders/orders.component';
import {ProfileComponent } from '../app/profile/profile.component';
import {RewardsComponent } from '../app/rewards/rewards.component';
import {CouponsComponent } from '../app/coupons/coupons.component';
import {HomepageComponent} from '../app/homepage/homepage.component';
import { ElectronicsComponent} from '../app/electronics/electronics.component';
import {ClothesComponent} from '../app/clothes/clothes.component';
import {BeautyProductsComponent} from '../app/beauty-products/beauty-products.component';
import {FootwareComponent} from '../app/footware/footware.component';
import {ProductInfoComponent} from '../app/product-info/product-info.component';
import {WishListInfoComponent} from '../app/wish-list-info/wish-list-info.component';
import {CartInfoComponent} from '../app/cart-info/cart-info.component';
import {CheckoutComponent} from '../app/checkout/checkout.component';
import{ReviewOrderComponent} from '../app/review-order/review-order.component';
import{ReturnOrderComponent} from'../app/return-order/return-order.component';
import {MyReturnOrdersComponent} from '../app/my-return-orders/my-return-orders.component'
import {ReceivedOrdersComponent} from '../app/received-orders/received-orders.component';
import {CustomerHistoryComponent} from '../app/customer-history/customer-history.component';
import {DealItemsComponent} from '../app/deal-items/deal-items.component';
import {ClearanceItemsComponent} from '../app/clearance-items/clearance-items.component';
import {ThiryPerccentageItemsComponent} from '../app/thiry-perccentage-items/thiry-perccentage-items.component';
import {FiftyPerccentageItemsComponent} from '../app/fifty-perccentage-items/fifty-perccentage-items.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomepageComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  },
  {
    path:'coupons',
    component:CouponsComponent
  },
  {
    path:'rewards',
    component:RewardsComponent
  },
  {
    path: 'mobile-product-info/:id',
    component: ProductInfoComponent
  },
  {
    path:'electronic',
    component:ElectronicsComponent
  },
  {
    path:'clothes',
    component:ClothesComponent
  },
  {
    path:'footware',
    component:FootwareComponent
  },
  {
path:'wishList-info',
component:WishListInfoComponent
  },
  {
    path:'beauty',
    component:BeautyProductsComponent
  },
  {
    path:'cartInfo',
    component:CartInfoComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'reviewOrder',
    component:ReviewOrderComponent
  },
  {
    path:'return/:id',
    component:ReturnOrderComponent
  },
  {
    path:'dealItems',
    component:DealItemsComponent
  },
  {
    path:'myReturnOrders',
    component:MyReturnOrdersComponent
  },
  {
    path:'receivedOrder',
    component:ReceivedOrdersComponent
  },
  {
    path:'history',
    component:CustomerHistoryComponent
  },
  {
    path:'clearance',
    component:ClearanceItemsComponent
  },
  {
    path:'thirtyHalf',
    component:ThiryPerccentageItemsComponent
  },
  {
    path:'fiftyHalf',
    component:FiftyPerccentageItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
