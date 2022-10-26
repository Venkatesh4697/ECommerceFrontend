import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-return-order',
  templateUrl: './return-order.component.html',
  styleUrls: ['./return-order.component.css']
})
export class ReturnOrderComponent implements OnInit {
  orderId: any;
  public returnForm: FormGroup;
  constructor(private productService: Service, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.returnForm = new FormGroup({
      reason: new FormControl({ value: '' }, Validators.required)    
    });
    this.route.params.subscribe(params => {

      this.orderId = params['id']
    });


  }



  returnOrder()
  {
 let details=[this.orderId,this.returnForm.value.reason,localStorage.getItem('userId')];
//  alert(this.orderId);
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
