import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-thiry-perccentage-items',
  templateUrl: './thiry-perccentage-items.component.html',
  styleUrls: ['./thiry-perccentage-items.component.css']
})
export class ThiryPerccentageItemsComponent implements OnInit {

  public products: Array<any>;
  public deals: Array<any>;
  public details:Array<any>;
  count: number;
  showAlert: boolean;
  public cartDetails:Array<any>;
  constructor(private productService: Service, private route: ActivatedRoute, private router: Router) { }
  // public cartDetails:Array<any>;
  ngOnInit(): void {
    this.productService.fetchDealItems(22).subscribe((result: any) => {
      if (result) {
        console.log("success");
        console.log(result);
        this.products = result;
      }
    }, (err: any) => {
      console.log("error");
    }
    );
  
    }
  
    getAllCategories() {
      // this.categoriesService.getMobileDetails().subscribe((result: any) => {
      //   if (result) {
      //     console.log("success");
      //     console.log(result);
      //     this.categories = result;
      //   }
      // }, (err: any) => {
      //   console.log("error");
      // }
      // );
      // this.products=[
      //   { categoryId:"1",productImage:"shopping.png",productName:"clothes"   },
      //   { categoryId:"2",productImage:"electronics.png",productName:"electronics"   },
      //   { categoryId:"3",productImage:"shoes.jpg",productName:"footware"   },
      //   { categoryId:"4",productImage:"shoes.jpg",productName:"beauty products"   }
      // ]
      this.getAllProducts();
    }

    getAllProducts()
    {
      const categoryId=4;
      this.productService.fetchProducts(categoryId).subscribe((result:any)=>{
       this.products=result;
      },(err:any)=>{
        console.log("error");
        alert("Please enter a valid credentials!!");
      }
      );
    }
  
    goToCart(id:any)
    {
      let name = localStorage.getItem('userId');
     this.cartDetails = [id,name]
       
      
      this.productService.addToCart(this.cartDetails).subscribe((result: any) => {
        // alert("hello");
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
  

    getAllDeals()
    {
       // this.categoriesService.getMobileDetails().subscribe((result: any) => {
      //   if (result) {
      //     console.log("success");
      //     console.log(result);
      //     this.deals = result;
      //   }
      // }, (err: any) => {
      //   console.log("error");
      // }
      // );
      this.deals=[
        { dealId:"1",imageSource:"shopping.png",dealName:"Clearance sale"   },
        { dealId:"2",imageSource:"electronics.png",dealName:"50% off"   },
        { dealId:"3",imageSource:"shoes.jpg",dealName:"Buy One Get One"   }
      ]
    }
  
    getStyles(urls: any) {
     let urlImage = "../assets/images/"+urls;
      console.log('url(' + urlImage + ')')
      return 'url(' + urlImage+') no-repeat center';
    }
    getdealStyle(urls: any)
    {
      let imageSource = "../assets/images/"+urls;
      console.log("image url");
  console.log('url(' + imageSource + ')')
  return 'url(' + imageSource+') no-repeat center';
    }
    goToProductDetails(id: any) {
      let url:string = '/mobile-product-info/' + id
      this.router.navigateByUrl(url);
    }
    goToDealDetails(id: any)
    {
  
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
  
    searchMobiles() {
  
     
      // this.productService.getMobileDetails().subscribe((result: any) => {
      //   if (result) {
      //     console.log("success");
      //     console.log(result);
      //     this.mobiles = result;
      //     this.mobiles = this.mobiles.filter(x => x.productName.toLocaleLowerCase().includes(this.searchName));
      //   }
      // }, (err: any) => {
      //   console.log("error");
      // }
      // );
    }

}
