import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-deal-items',
  templateUrl: './deal-items.component.html',
  styleUrls: ['./deal-items.component.css']
})
export class DealItemsComponent implements OnInit {
orderId:any;
  dealsItems: any;
  public products: Array<any>;
  public deals: Array<any>;
  public details:Array<any>;
  public cartDetails:Array<any>;
  count: number;
  showAlert: boolean;
constructor(private productService: Service, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {

    //   this.orderId = params['id']
    // });

    localStorage.setItem('userId','');
    let dealId=localStorage.getItem('dealId');
    this.orderId=dealId;

    this.productService.fetchDealItems(this.orderId).subscribe((result:any)=>{
      this.dealsItems=result;
     },(err:any)=>{
       console.log("error");
       alert("Please enter a valid credentials!!");
     }
     );

  }

  goToWishList(id: any)
    {
      let name = localStorage.getItem('userId');
     // alert(name);
       this.details = [id,name]
       
      
      this.productService.addItemsToWishList(this.details).subscribe((result: any) => {
        if (result) {
          this.showAlert = true;
          alert("Added to wishlist");
        }
      }, (err: any) => {
        console.log("error");
        console.log('aaaa');
        this.showAlert = true;
        setTimeout(() => {                           // <<<---using ()=> syntax
          this.showAlert = false;
        }, 2000);
  
      }
      );
    }
    goToCart(id:any)
    {
      let name = localStorage.getItem('userId');
     this.cartDetails = [id,name]
       
      
      this.productService.addToCart(this.cartDetails).subscribe((result: any) => {
        alert("hello");
        if (result) {
      //    this.showAlert = true;
      window.alert("added successfully to cart");
        
        }
      }, (err: any) => {
        console.log("error");
        console.log('aaaa');
        this.showAlert = true;
        setTimeout(() => {                           // <<<---using ()=> syntax
          this.showAlert = false;
        }, 2000);
  
      }
      );
    }
      goToProductDetails(id: any) {
        let url:string = '/mobile-product-info/' + id
        this.router.navigateByUrl(url);
      }
      getStyles(urls: any) {
        let urlImage = "../assets/images/"+urls;
         console.log('url(' + urlImage + ')')
         return 'url(' + urlImage+') no-repeat center';
       }

}
