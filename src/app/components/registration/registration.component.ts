import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private UserService: UserService) { }

  ngOnInit(){
    this.registerForm= this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]]
    });
  }

  onSubmit(){
    console.log("on submit register function calling ",this.registerForm.value);
    // requesting the registerfor,
    let RegistReq={
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      // confirmPassword:""
      service:"advacne"
    }

    console.log(RegistReq)
      this.UserService.registerUser(RegistReq).subscribe((response:any) => { console.log(response);
    }, (error:any) => { console.log(error); 
    })
}
    get f() { return this.registerForm.controls; }

}
