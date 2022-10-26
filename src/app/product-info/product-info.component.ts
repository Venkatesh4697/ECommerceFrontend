import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  public mobileDetails: any;
  public count = 1;
  public showAlert = false;
  private productId:any;

  constructor(private productService: Service, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.productId = params['id'] //log the value of id
      this.getMobileProductDetails(this.productId);
    });
  }

  getMobileProductDetails(id :any) {
    let pid = {productId:id}
    // alert("inside product info");
    // alert(id);
    this.productService.getMobileProductDetails(pid).subscribe((result: any) => {
      if (result) {
        console.log("success");
        console.log(result);
        this.mobileDetails = result;
      }
    }, (err: any) => {
      console.log("error");
    }
    );
  }
  getImageUrl(urls: any) {
    let urlImage = "../assets/images/" + urls;
    console.log('url(' + urlImage + ')')
    return 'url(' + urlImage + ') no-repeat center';
  }
  changeCount(value:any) {
    if (this.count > 1) {
      this.count = this.count + value;
    } else if( this.count == 1 && value != -1){
      this.count = this.count + value;
    }else {
      return;
    }
  }
  addToCart() {
    let name = localStorage.getItem('userId');
    let productId=this.productId;
     let id=name;
     let count=this.count;
    let details = [
      productId,id,count
    ]
    // alert(this.count);
    this.productService.addToCartMultiple(details).subscribe((result: any) => {
     
      if (result) {
        this.count = 1;
        this.showAlert = true;
      }
    }, (err: any) => {
      console.log("error");
      console.log('aaaa');
      this.count = 1;
      this.showAlert = true;
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.showAlert = false;
      }, 2000);

    }
    );
    
  }
}
