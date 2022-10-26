import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit {

  public cartDetails: any;
  public isDisabled=true;
  public detailsToRemove:Array<any>;
  constructor(private productService: Service, private router: Router) { }

  ngOnInit(): void {
    let name = localStorage.getItem('userId');
    let details = {
      "id": name
    }
    this.productService.getCartDetails(localStorage.getItem('userId')).subscribe((result: any) => {
      if (result) {
        this.cartDetails = result;
            if(this.cartDetails!=null) 
            {
              this.isDisabled=false;
            }
      }
    }, (err: any) => {
      console.log("error"+err);
    }
    );
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  deleteItem(pid: any) {
    let name = localStorage.getItem('userId');
   
    this.detailsToRemove = [pid,name]
    this.productService.removeFromCart(this.detailsToRemove).subscribe((result: any) => {
      if (result) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/cartInfo']);
        });
      }
    }, (err: any) => {
      console.log("error");
    }
    );
  }

  checkout()
  {
    
    this.router.navigate(['/checkout']);
  }

}
