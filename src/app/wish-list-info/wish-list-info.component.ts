import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-wish-list-info',
  templateUrl: './wish-list-info.component.html',
  styleUrls: ['./wish-list-info.component.css']
})
export class WishListInfoComponent implements OnInit {

  public details:Array<any>;
  public cartDetails: any;
  constructor(private productService: Service, private router: Router) { }

  ngOnInit(): void {
    let name = localStorage.getItem('userId');
    // alert(localStorage.getItem('userId'));
    // let details = {
    //   "id": name
    // }
    this.productService.getWishlistDetails(localStorage.getItem('userId')).subscribe((result: any) => {
      if (result) {
        this.cartDetails = result;
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
    this.details = [pid,name]
    this.productService.removeFromWishList(this.details).subscribe((result: any) => {
      if (result) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/wishList-info']);
        });
      }
    }, (err: any) => {
      console.log("error");
    }
    );
  }

}
