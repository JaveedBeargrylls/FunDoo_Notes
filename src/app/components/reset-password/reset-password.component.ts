import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder,private UserService: UserService) { }

  ngOnInit(){
    this.resetForm= this.formBuilder.group({
      newpassword:['',[Validators.required,Validators.minLength(6)]],
      reEnterpassword:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  onSubmit(){
    console.log("on submit function calling for Reset",this.resetForm.value);
    let resetReq={
      password: this.resetForm.value.password,
      service:"advacne"
  }
  console.log(resetReq)
  this.UserService.resetUser(resetReq).subscribe((response:any)=>{console.log(response);}, (error:any)=>{console.log(error);})
}
  get f() { return this.resetForm.controls;}

}
