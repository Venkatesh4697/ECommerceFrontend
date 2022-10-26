import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service} from '../service'
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup ;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  user=new User('','','','', '','','','','','','');

  constructor(private registerService: Service,private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      emailId: [''],
      firstName: [''],
       lastName: [''],
        password: [''],
        repassword: [''],
        phoneNumber: ['']

    });

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      houseNumber: ['', Validators.required],
      streetName: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', Validators.required]

    });
  }

  register()
  {

  }

  submitUser()
  {
    this.user.emailId = this.registrationForm.value.emailId;
    this.user.firstName = this.registrationForm.value.firstName;
    this.user.lastName = this.registrationForm.value.lastName;
    this.user.password = this.registrationForm.value.password;
    this.user.phoneNumber = this.registrationForm.value.phoneNumber;
    this.user.houseNumber = this.secondFormGroup.value.houseNumber;
    this.user.streetName = this.secondFormGroup.value.streetName;
    this.user.city = this.secondFormGroup.value.city;
    this.user.state = this.secondFormGroup.value.state;
    this.user.pinCode = this.secondFormGroup.value.pinCode;
    // this.registerService.saveUser( this.user);

    this.registerService.saveUser(this.user).subscribe((result:any)=>{
      if(result)
      {
       console.log("success");
       alert("You have registered sucessfully");
       this.router.navigate(['/login']);
      }
    },(err:any)=>{
      console.log("error");
      console.log(this.user.emailId);
      alert("Please enter a valid details");
    }
    );
  }

}
