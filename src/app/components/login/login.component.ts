import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router,private UserService: UserService,private formBuilder: FormBuilder, private SnackBar:MatSnackBar) { }

  ngOnInit(){
    this.loginForm= this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }
  onSubmit(){
    

    console.log("on submit function calling for login",this.loginForm.value);
    let loginReq = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    console.log("loginRequest",loginReq)
    this.UserService.loginUser(loginReq).subscribe(
      
      (respone:any) => {console.log("login Response",respone);

      localStorage.setItem('token',respone.id),

      localStorage.setItem('userId',respone.userId),//to get the label userID

      this.router.navigateByUrl('/dashboard/home'),
      this.SnackBar.open("Login successfull", '', { duration: 2000,});
    },
    (error:any) => { 

      console.log(error)
      this.SnackBar.open("Login UnSuccessfull", 'try Again', { duration: 2000, });
    });
  }
  get f() { return this.loginForm.controls; }
}
