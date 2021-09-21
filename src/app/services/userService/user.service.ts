import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  registerUser(reqdata:any){
    console.log("Register User data",reqdata)
    return this.httpService.Post('/user/userSignUp',reqdata)
  }
  
  loginUser(reqdata:any){
    console.log("Login User data",reqdata)
    return this.httpService.Post('/user/login',reqdata)
  }

  forgetUser(reqdata:any){
    console.log("Forget User data",reqdata)
    return this.httpService.Post('/user/reset',reqdata)
  }

  resetUser(reqdata:any,token:any){
    console.log("Reset User data",reqdata)
    return this.httpService.Post(`/user/reset-password`,reqdata)
  }

}
