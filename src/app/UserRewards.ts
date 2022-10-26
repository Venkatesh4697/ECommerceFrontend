export class UserRewards {
email_id:String;
reward_id:String;
amountReward:Number;
expiryDate:String;

constructor(email_id:String,reward_id:String,amountReward:Number,expiryDate:String)
{
    this.email_id=email_id;
    this.reward_id=reward_id;
    this.amountReward=amountReward;
    this.expiryDate=expiryDate;
}
}
