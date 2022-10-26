import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import{MatTabsModule} from '@angular/material/tabs';
import{ MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
 import { MatIconModule} from '@angular/material/icon';
 import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { CouponsComponent } from './coupons/coupons.component';
import { RewardsComponent } from './rewards/rewards.component';
import { MatStepperModule } from '@angular/material/stepper';
import { DealsComponent } from './deals/deals.component';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table'  
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { ClothesComponent } from './clothes/clothes.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FootwareComponent } from './footware/footware.component';
import { BeautyProductsComponent } from './beauty-products/beauty-products.component';
import { CartInfoComponent } from './cart-info/cart-info.component';
import { WishListInfoComponent } from './wish-list-info/wish-list-info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { ReturnOrderComponent } from './return-order/return-order.component';
import { MyReturnOrdersComponent } from './my-return-orders/my-return-orders.component';
import { ReceivedOrdersComponent } from './received-orders/received-orders.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { DealItemsComponent } from './deal-items/deal-items.component';
import { ClearanceItemsComponent } from './clearance-items/clearance-items.component';
import { ThiryPerccentageItemsComponent } from './thiry-perccentage-items/thiry-perccentage-items.component';
import { FiftyPerccentageItemsComponent } from './fifty-perccentage-items/fifty-perccentage-items.component';
// import { MatExpansionPanelDescription } from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ProductInfoComponent,
    ProfileComponent,
    OrdersComponent,
    CouponsComponent,
    RewardsComponent,
    DealsComponent,
    ClothesComponent,
    ElectronicsComponent,
    FootwareComponent,
    BeautyProductsComponent,
    CartInfoComponent,
    WishListInfoComponent,
    CheckoutComponent,
    ReviewOrderComponent,
    ReturnOrderComponent,
    MyReturnOrdersComponent,
    ReceivedOrdersComponent,
    CustomerHistoryComponent,
    DealItemsComponent,
    ClearanceItemsComponent,
    ThiryPerccentageItemsComponent,
    FiftyPerccentageItemsComponent,
   
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    // MatExpansionPanelDescription,
    MatCardModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSidenavModule,
    SlickCarouselModule,
    MatStepperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
