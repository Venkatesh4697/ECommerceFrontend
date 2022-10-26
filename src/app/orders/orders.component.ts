import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public activeOrders: Array<any>;
  dialog: any;
  showReturn=false;
  confirmOrderId:any;

  constructor(private productService: Service,private route: ActivatedRoute,   private router: Router ) { }
returnForm:FormGroup;
  ngOnInit(): void {
    this.fetchAllActiveOrders();
    this.returnForm = new FormGroup({
      reason: new FormControl({ value: '' }, Validators.required)    
    });
  }

  fetchAllActiveOrders()
  {
    this.productService.getActiveOrdersForUser().subscribe((result: any) => {
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
  cancelOrder(orderId:any)
  {
    let details=[orderId,localStorage.getItem('userId')];
   
       this.productService.cancelOrder(details).subscribe((result:any)=>{
         if(result)
         {
          alert("your order is cancelled and your money is refunded");
          this.router.navigate(['/orders']);
          window.location.reload();
         }
       },(err:any)=>{
      
         alert("Order is failed to return");
       }
       );
  }
  
  returnOrder(orderId:any)
  {  

  console.log(orderId);
  this.showReturn=true;
  this.confirmOrderId=orderId;
   // this.router.navigate(['/return/orderId']);
  }

  confirmReturn()
  {
    alert(this.returnForm.value.reason);
    let details=[this.confirmOrderId,this.returnForm.value.reason,localStorage.getItem('userId')];
    alert(this.confirmOrderId);
       this.productService.returnOrder(details).subscribe((result:any)=>{
         if(result)
         {
          alert("your order is placed for return.You can expect refund amount very shortly");
          this.router.navigate(['/orders']);
         }
       },(err:any)=>{
      
         alert("Order is failed to return");
       }
       );
  }
}

