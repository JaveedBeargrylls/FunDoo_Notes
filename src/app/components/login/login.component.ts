import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router,private UserService: UserService,private formBuilder: FormBuilder) { }

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
    }

    console.log(loginReq)
    this.UserService.loginUser(loginReq).subscribe((respone:any) => {console.log(respone);},(error:any) => { console.log(error)})
  }
  get f() { return this.loginForm.controls; }
}
