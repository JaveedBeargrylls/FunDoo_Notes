import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/userService/user.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm! : FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder,private UserService: UserService, private SnackBar:MatSnackBar) { }

  ngOnInit(){
    this.forgetForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]]
    });
  }
  onSubmit(){
    console.log("onSubmit forgetPswrd function calling",this.forgetForm.value);
    let ForgetReq={
      email: this.forgetForm.value.email,
    }

    console.log(ForgetReq)
    this.UserService.forgetUser(ForgetReq).subscribe((response:any) => { console.log(response);
      this.SnackBar.open("Check your mail Reset link has been sent ", ' ', { duration: 1000, });},
    (error:any) => { console.log(error)})
    this.SnackBar.open("Enter correct Email", ' ', { duration: 1000, });
  }
  get f() { return this.forgetForm.controls;}
}
