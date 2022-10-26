import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Coupons } from '../coupons';
import { Service } from '../service';
import { User } from '../user';
import { UserRewards } from '../user-rewards';

@Component({
  selector: 'app-review-order',
  templateUrl: './review-order.component.html',
  styleUrls: ['./review-order.component.css']
})
export class ReviewOrderComponent implements OnInit {

  public details:Array<any>;
  public coupons:Array<any>;
  public rewards:Array<any>;
  public cartDetails: any;
  public profileForm: FormGroup;
  public rewardForm: FormGroup;
  public couponForm: FormGroup;
  public user:User;
  public emailId: any;
  public cartAmount:any;
  secondFormGroup: any;
  formBuilder: any;
  overallPrice:number;
  isLinear = true;
  selected: number;
  isCard=false;
  checkEligibility=false;
  isClicked=false;
  clicked=false;
  
  constructor(private productService: Service, private router: Router) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl({ value: '' }, Validators.required),
      lastName: new FormControl({ value: '' }, Validators.required),
      emailId: new FormControl({ value: '' }, Validators.required),
      phoneNumber: new FormControl({ value: '' }, Validators.required),
    houseNumber: new FormControl({ value: '' }, Validators.required),
    streetName: new FormControl({ value: '' }, Validators.required),
      city: new FormControl({ value: '' }, Validators.required),
      state: new FormControl({ value: '' }, Validators.required),
      pinCode: new FormControl({ value: '' }, Validators.required),
    
    });

  this.getUserData();
  this.getCartDetails();
  this.getCartPrice();
 this.getCouponsData();
 this.getUserRewards();
//  this.getWalletData;

  }
 getUserData()
 {
  this.emailId= localStorage.getItem('userId');
    console.log(localStorage.getItem('userId'));
    this.productService.getUserDetails(this.emailId).subscribe((data:any) => {
        this.user = data;
        console.log("in testing");
        console.log(this.user);
        this.profileForm.controls['firstName'].setValue(this.user.firstName);
        this.profileForm.controls['lastName'].setValue(this.user.lastName);
        this.profileForm.controls['emailId'].setValue(this.user.emailId);
        this.profileForm.controls['phoneNumber'].setValue(this.user.phoneNumber);
        this.profileForm.controls['houseNumber'].setValue(this.user.houseNumber);
        this.profileForm.controls['streetName'].setValue(this.user.streetName);
        this.profileForm.controls['city'].setValue(this.user.city);
        this.profileForm.controls['state'].setValue(this.user.state);
        this.profileForm.controls['pinCode'].setValue(this.user.pinCode);
        
      });
    
 }
 updateType(value:any)
 {
if(value=="credit")
{
  this.isCard=true;
}
 }
 getCouponsData()
 {
 let name = localStorage.getItem('userId');
  this.productService.getValidCoupons(name).subscribe((data:any) => {
    this.coupons = data;
    console.log("in testing coupons");
    console.log(this.coupons);
    // this.couponForm.controls['couponId'].setValue(this.coupons.couponId);
    // this.couponForm.controls['couponAmount'].setValue(this.coupons.couponAmount);
    // this.couponForm.controls['validStartDate'].setValue(this.coupons.validStartDate);
    // this.couponForm.controls['validEndDate'].setValue(this.coupons.validEndDate);
   
  });
 }
 getUserRewards()
 {
  let name = localStorage.getItem('userId');
  console.log("in testing rewards");
  this.productService.getValidUserRewards(name).subscribe((data:any) => {
    this.rewards = data;
    console.log("in testing rewards");
    console.log(this.rewards);
    // this.rewardForm.controls['email_id'].setValue(this.rewards.emailId);
    // this.rewardForm.controls['amountReward'].setValue(this.rewards.amountReward);
    // this.rewardForm.controls['rewardId'].setValue(this.rewards.rewardId);
    // this.rewardForm.controls['expiryDate'].setValue(this.rewards.expiryDate);
   
  });
 }
 getWalletData()
 {

 }
 getCartDetails()
 {
  let name = localStorage.getItem('userId');
  console.log("for cart");
  let details = {
    "id": name
  }
  this.productService.getCartForCheckout(localStorage.getItem('userId')).subscribe((result: any) => {
    if (result) {
      this.cartDetails = result;
      console.log(result);
    }
  }, (err: any) => {
    console.log("error"+err);
  }
  );

 

 }

 checkPriceChange(couponId:number,couponAmount:number)
 {
   console.log("check coupon");
   console.log(couponId);
   console.log(couponAmount);
   if(this.cartAmount>couponAmount)
   {
     this.cartAmount=this.cartAmount-couponAmount;
     alert("coupon applied succesfully and your final price is updated");
   }
  this.isClicked=true;
 }

 checkBasedonRewards(rewardId:number,amountReward:number)
 {
   console.log("check coupon");
   console.log(rewardId);
   console.log(amountReward);
   if(this.cartAmount>amountReward)
   {
     this.cartAmount=this.cartAmount-amountReward;
     alert("coupon applied succesfully and your final price is updated");
   }
   this.clicked=true;
 }

 getCartPrice()
 {
  let name = localStorage.getItem('userId');
  console.log("for cart");
  let details = {
    "id": name
  }
  this.productService.getCartPrice(localStorage.getItem('userId')).subscribe((result: any) => {
    if (result) {
      this.cartAmount = result;
      console.log(result);
    }
  }, (err: any) => {
    console.log("error"+err);
  }
  );

 

 }

 doPayment()
 {
  
  let name = localStorage.getItem('userId');
  console.log("for cart");
  let details = [
     name,
    this.cartAmount
  ]
  this.productService.saveToOrders(details).subscribe((result: any) => {
    if (result) {
      alert("order placed.");
      this.router.navigate(['/home']);
    }
  }, (err: any) => {
    console.log("error"+err);
  }
  );
 }
 

}
