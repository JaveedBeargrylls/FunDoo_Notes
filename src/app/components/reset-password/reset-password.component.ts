import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.resetForm= this.formBuilder.group({
      newpassword:['',[Validators.required,Validators.minLength(6)]],
      reEnterpassword:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  get f() { return this.resetForm.controls;}

}
