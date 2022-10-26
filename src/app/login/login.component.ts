import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup ;
  user=new User('','','','', '','','','','','','');
  constructor(private loginService: Service,private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      emailId: [''],
        password: [''],
       
    });
  }

  login()
  {
    this.user.emailId = this.loginForm.value.emailId;
    this.user.password = this.loginForm.value.password;

    this.loginService.loginUser(this.user).subscribe((result:any)=>{
      if(result)
      {
        console.log("success"+result.emailId);
        localStorage.setItem('userId', result.emailId);
       this.router.navigate(['/home']);
      }
    },(err:any)=>{
      console.log("error");
      alert("Please enter a valid credentials!!");
    }
    );

  }
  register()
  {
    this.router.navigate(['/register']);
  }

  

}
