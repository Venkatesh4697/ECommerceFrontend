export class UserRewards {
    emailId:String;
    rewardId:String;
    amountReward:Number;
    expiryDate:String;
    
    constructor(emailId:String,rewardId:String,amountReward:Number,expiryDate:String)
    {
        this.emailId=emailId;
        this.rewardId=rewardId;
        this.amountReward=amountReward;
        this.expiryDate=expiryDate;
    }
    }
