import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-received-orders',
  templateUrl: './received-orders.component.html',
  styleUrls: ['./received-orders.component.css']
})
export class ReceivedOrdersComponent implements OnInit {
  public receivedOrders: Array<any>;
  dialog: any;
  showReturn=false;
  confirmOrderId:any;
 
  constructor(private productService: Service,private route: ActivatedRoute,   private router: Router ) { }
returnForm:FormGroup;
  ngOnInit(): void {
    this.fetchReceivedOrders();
    this.returnForm = new FormGroup({
      reason: new FormControl({ value: '' }, Validators.required)    
    });
  }

  fetchReceivedOrders()
  {
    this.productService.getReceivedOrders().subscribe((result: any) => {
      if (result) {
        this.receivedOrders = result;
       
      }
    }, (err: any) => {
      console.log("error");
      console.log('aaaa');
     console.log("There are not coupons at this moment");
     

    }
    );
  }

  confirmReturn(orderId:any)
  {
    // alert(orderId);
    // alert(this.returnForm.value.reason);
    let details=[orderId,this.returnForm.value.reason,localStorage.getItem('userId')];
    // alert(this.confirmOrderId);
       this.productService.returnOrder(details).subscribe((result:any)=>{
         if(result)
         {
          alert("your order is placed for return.You can expect refund amount very shortly");
          window.location.reload();
          this.router.navigate(['/receivedOrder']);
         }
       },(err:any)=>{
      
         alert("Order is failed to return");
       }
       );
  }

}
