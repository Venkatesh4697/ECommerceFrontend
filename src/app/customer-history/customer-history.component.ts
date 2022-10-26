import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent implements OnInit {

  public activeOrders: Array<any>;
  dialog: any;

  constructor(private productService: Service,private route: ActivatedRoute,   private router: Router ) { }

  ngOnInit(): void {
    this.fetchAllOrders();
  }

  fetchAllOrders()
  {
    this.productService.getAllOrders().subscribe((result: any) => {
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
