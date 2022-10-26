import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Service } from '../service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public categories: Array<any>;
  public deals: Array<any>;
  routerLinkName:string;
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

  
  constructor(private productService: Service, private route: ActivatedRoute, private router: Router,private fb:FormBuilder) { }



  ngOnInit(): void {
  //   this.route.params.subscribe(params => {
      
  //     const productTypes = params['productType'] //log the value of id
  //     if (productTypes === 'mobile') {
  //       this.getAllMobiles();
  //     } else {

  //     }
  //  });
 this.getAllCategories();
 this.getAllDeals();
  }

  getAllCategories() {
    this.productService.getCategories().subscribe((result: any) => {
      if (result) {
        console.log("success");
        console.log(result);
        this.categories = result;
      }
    }, (err: any) => {
      console.log("error");
    }
    );
    // this.categories=[
    //   { categoryId:"1",productImage:"shopping.png",categoryName:"clothes"   },
    //   { categoryId:"2",productImage:"electronics.png",categoryName:"electronics"   },
    //   { categoryId:"3",productImage:"shoes.jpg",categoryName:"footware"   },
    //   { categoryId:"4",productImage:"shoes.jpg",categoryName:"beauty products"   }
    // ]
  }

  getAllDeals()
  {
     this.productService.getDeals().subscribe((result: any) => {
      if (result) {
        console.log("success");
        console.log(result);
        this.deals = result;
      }
    }, (err: any) => {
      console.log("error");
    }
    );
    // this.deals=[
    //   { dealId:"1",imageSource:"shopping.png",dealName:"Clearance sale"   },
    //   { dealId:"2",imageSource:"electronics.png",dealName:"50% off"   },
    //   { dealId:"3",imageSource:"shoes.jpg",dealName:"Buy One Get One"   }
    // ]
  }

  getStyles(urls: any) {
  
   let newurls= urls.replace(/\s/g, "");
   let updateurls=newurls.replace(/\%/g,"");
   let urlImage = "../assets/images/"+updateurls+".png";
  // alert(urlImage);
    console.log('url(' + urlImage + ')')
    return 'url(' + urlImage+') no-repeat center';
  }
  getDealStyles(urls: any)
  {
    let newurls= urls.replace(/\s/g, "");
      let urlImage = "../assets/images/"+newurls+".png";
    console.log("image url");
console.log('url(' + urlImage + ')')
return 'url(' + urlImage+') no-repeat center';
  }
  goToProductDetails(id: any) {
 
    if(id==1)
    {
      this.routerLinkName='/clothes';
    }else if(id==2)
    {
      this.routerLinkName='/electronic';
    }else if(id==3){
      this.routerLinkName='/footware';
    }else{
      this.routerLinkName='/beauty';
    }
    
    let url:string = this.routerLinkName;
    this.router.navigateByUrl(url);
  }

  gotToGadgets()
  {
    this.router.navigateByUrl('/electronic');
  }
  gotToClothes()
  {
    
    this.router.navigateByUrl('/clothes');
  }
  gotToFootware()
  {
    this.router.navigateByUrl('/footware');
  }


  goToDealDetails(id: any)
  {
    if(id==11)
    {
      this.routerLinkName='/clearance';
    }else if(id==22)
    {
      this.routerLinkName='/thirtyHalf';
    }else if(id==33){
      this.routerLinkName='/fiftyHalf';
    }    
    let url:string = this.routerLinkName;
    this.router.navigateByUrl(url);
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
