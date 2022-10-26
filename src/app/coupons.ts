export class Coupons {
    couponId:String;
validStartDate:String;
validEndDate:String
couponAmount:Number;

constructor(couponId:String,validStartDate:String,validEndDate:String,couponAmount:Number)
{
    this.couponId=couponId;
    this.validStartDate=validStartDate;
    this.validEndDate=validEndDate;
    this.couponAmount=couponAmount;
}
}


