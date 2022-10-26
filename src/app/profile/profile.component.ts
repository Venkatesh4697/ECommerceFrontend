import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  panelOpenState = false;
  public profileForm: FormGroup;
  public user:User;
  public emailId: any;
  constructor(private productService: Service,private route: ActivatedRoute,   private router: Router ) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl({ value: '' }, Validators.required),
      lastName: new FormControl({ value: '' }, Validators.required),
      emailId: new FormControl({ value: '' }, Validators.required),
      phoneNumber: new FormControl({ value: '' }, Validators.required),
    houseNumber: new FormControl({ value: '' }, Validators.required),
    streetName: new FormControl({ value: '' }, Validators.required),
      city: new FormControl({ value: '' }, Validators.required),
      state: new FormControl({ value: '' }, Validators.required),
      pinCode: new FormControl({ value: '' }, Validators.required),
    
    });

     this.setForm();
  }
  setForm()
  {
    
    this.emailId= localStorage.getItem('userId');
    console.log(localStorage.getItem('userId'));
    this.productService.getUserDetails(this.emailId).subscribe((data:any) => {
        this.user = data;
        console.log("in testing");
        console.log(this.user);
        this.profileForm.controls['firstName'].setValue(this.user.firstName);
        this.profileForm.controls['lastName'].setValue(this.user.lastName);
        this.profileForm.controls['emailId'].setValue(this.user.emailId);
        this.profileForm.controls['phoneNumber'].setValue(this.user.phoneNumber);
        this.profileForm.controls['houseNumber'].setValue(this.user.houseNumber);
        this.profileForm.controls['streetName'].setValue(this.user.streetName);
        this.profileForm.controls['city'].setValue(this.user.city);
        this.profileForm.controls['state'].setValue(this.user.state);
        this.profileForm.controls['pinCode'].setValue(this.user.pinCode);
        
      });
    
  }
  updateUser()
  {
    this.user.emailId = this.profileForm.value.emailId;
    this.user.firstName = this.profileForm.value.firstName;
    this.user.lastName = this.profileForm.value.lastName;
    this.user.password = this.profileForm.value.password;
    this.user.phoneNumber = this.profileForm.value.phoneNumber;
    this.user.houseNumber = this.profileForm.value.houseNumber;
    this.user.streetName = this.profileForm.value.streetName;
    this.user.city = this.profileForm.value.city;
    this.user.state = this.profileForm.value.state;
    this.user.pinCode = this.profileForm.value.pinCode;
    // this.registerService.saveUser( this.user);

    this.productService.updateUser(this.user).subscribe((result:any)=>{
      if(result)
      {
       console.log("success");
       alert("your profile is updated successfully");
       this.router.navigate(['/profile']);
      }
    },(err:any)=>{
      console.log("error");
      console.log(this.user.emailId);
      alert("Please enter a valid details");
    }
    );
  }
  
}
