import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  public allCoupons: Array<any>;
  constructor(private productService: Service, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getRewardData();
    
  }
  getRewardData()
  {
     // this.categoriesService.getMobileDetails().subscribe((result: any) => {
    //   if (result) {
    //     console.log("success");
    //     console.log(result);
    //     this.allCoupons = result;
    //   }
    // }, (err: any) => {
    //   console.log("error");
    // }
    // );

    this.productService.getAllRewards().subscribe((result: any) => {
      if (result) {
        this.allCoupons = result;
      }
    }, (err: any) => {
      console.log("error");
      console.log('aaaa');
     console.log("There are not coupons at this moment");
     

    }
    );

    
    
    // this.allCoupons = [
    //   {email_id: 1, reward_id: 'AXWE76', amountReward:'150', expiryDate: '02/06/2022'},
    //   {email_id: 2, reward_id: '65TGIB', amountReward: '200', expiryDate: '02/06/2022'},
    //   {email_id: 3, reward_id: 'TEJU7654', amountReward: '300', expiryDate: '02/06/2022'},
    //   {email_id: 4, reward_id: 'HUY67P', amountReward: '450', expiryDate: '02/06/2022'},
    //   {email_id: 5, reward_id: 'QWERT54', amountReward: '500', expiryDate: '02/06/2022'}
     
    // ];
   
    
  }

}
