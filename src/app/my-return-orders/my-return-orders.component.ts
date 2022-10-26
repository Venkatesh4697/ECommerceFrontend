import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-my-return-orders',
  templateUrl: './my-return-orders.component.html',
  styleUrls: ['./my-return-orders.component.css']
})
export class MyReturnOrdersComponent implements OnInit {

  public activeOrders: Array<any>;
  dialog: any;

  constructor(private productService: Service,private route: ActivatedRoute,   private router: Router ) { }

  ngOnInit(): void {
    this.fetchAllActiveOrders();
  }

  fetchAllActiveOrders()
  {
    this.productService.getReturnOrdersForUser().subscribe((result: any) => {
      if (result) {
        this.activeOrders = result;
        console.log(this.activeOrders);
      }
    }, (err: any) => {
      console.log("error");
      console.log('aaaa');
     console.log("There are not coupons at this moment");
     

    }
    );
  }

}
