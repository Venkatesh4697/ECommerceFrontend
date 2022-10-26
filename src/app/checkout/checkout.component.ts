import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';
import { User } from '../user';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  panelOpenState = false;
  public addressForm: FormGroup;
  public user:User;
  public emailId: any;
  public userAddress:Array<any>;
  constructor(private productService: Service,private route: ActivatedRoute,   private router: Router, ) { }
  ngOnInit(): void {

    this.addressForm = new FormGroup({
   
    houseNumber: new FormControl({ value: '' }, Validators.required),
    streetName: new FormControl({ value: '' }, Validators.required),
      city: new FormControl({ value: '' }, Validators.required),
      state: new FormControl({ value: '' }, Validators.required),
      pinCode: new FormControl({ value: '' }, Validators.required)
    
    });

    this.setForm();
  }

  setForm()
  {
    
    this.emailId= localStorage.getItem('userId');
    console.log(localStorage.getItem('userId'));
    this.productService.getUserDetails(this.emailId).subscribe((data:any) => {
        this.user = data;
        this.addressForm.controls['houseNumber'].setValue(this.user.houseNumber);
        this.addressForm.controls['streetName'].setValue(this.user.streetName);
        this.addressForm.controls['city'].setValue(this.user.city);
        this.addressForm.controls['state'].setValue(this.user.state);
        this.addressForm.controls['pinCode'].setValue(this.user.pinCode);
        
      });
    
  }

  updateUserAddress()
  {
    let name = localStorage.getItem('userId');
  //  alert(this.addressForm.value.city);
    this.userAddress = [name, this.addressForm.value.houseNumber,this.addressForm.value.streetName,this.addressForm.value.city,this.addressForm.value.state,this.addressForm.value.pinCode];
    this.productService.updateUserAddress(this.userAddress).subscribe((result: any) => {
      if (result) {
      alert("Updated address successfully");
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/checkout']);
        });
      }
    }, (err: any) => {
      console.log("error");
    }
    );
  }
  proceed()
  {
    this.router.navigate(['/reviewOrder']);
  }

}
