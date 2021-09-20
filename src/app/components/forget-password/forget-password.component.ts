import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/userService/user.service'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm! : FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder,private UserService: UserService) { }

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
    this.UserService.forgetUser(ForgetReq).subscribe((response:any) => { console.log(response);},(error:any) => { console.log(error)})
  }
  get f() { return this.forgetForm.controls;}
}
