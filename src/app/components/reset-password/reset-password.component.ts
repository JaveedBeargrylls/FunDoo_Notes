import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  token:any
  constructor(private router: Router,private formBuilder: FormBuilder,private UserService: UserService, private ActiveRoute:ActivatedRoute, private SnackBar:MatSnackBar) { }

  ngOnInit(){
    this.resetForm= this.formBuilder.group({
      // email: ['',[Validators.required,Validators.email]],
      newpassword:['',[Validators.required,Validators.minLength(6)]],
      reEnterpassword:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  onSubmit(){

    this.token = this.ActiveRoute.snapshot.paramMap.get('token');
    console.log("token for reset",this.token);
  
    localStorage.setItem('token',this.token);

    console.log("on submit function calling for Reset",this.resetForm.value);
    let resetReq={
      newPassword: this.resetForm.value.password,
  }
  console.log(resetReq)
  this.UserService.resetUser(resetReq,this.token).subscribe((response:any)=>{console.log(response);
    this.SnackBar.open("Password was Changed ", ' ', { duration: 1000,} );},

    (error:any)=>{console.log(error);
    this.SnackBar.open("Password was Not Changed ReEnter ", ' ', { duration: 1000,} );})
}
  get f() { return this.resetForm.controls;}

}
