import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Coupons} from '../coupons';
import { Service } from '../service';



@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {
coupons=new Coupons('','','',0);
public allCoupons: Array<any>;
dataSource  = [];
constructor(private productService: Service, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCouponData();
    
  }
  getCouponData()
  {
    this.productService.getCoupons().subscribe((result: any) => {
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
    //   {coupon_id: 1, startDate: '01/01/2022', endDate:'01/01/2022', coupon_amount: '500'},
    //   {coupon_id: 2, startDate: '02/01/2022', endDate: '01/01/2022', coupon_amount: '600'},
    //   {coupon_id: 3, startDate: '02/03/2022', endDate: '01/01/2022', coupon_amount: '100'},
    //   {coupon_id: 4, startDate: '02/04/2022', endDate: '01/01/2022', coupon_amount: '200'},
    //   {coupon_id: 5, startDate: '02/06/2022', endDate: '01/01/2022', coupon_amount: '250'}
     
    // ];
   
    
  }
  
}
