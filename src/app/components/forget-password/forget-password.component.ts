import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm! : FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.forgetForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]]
    });
  }
  get f() { return this.forgetForm.controls;}
}
