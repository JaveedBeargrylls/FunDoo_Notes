import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: any
  BaseUrl = environment.BaseUrl

  

  constructor(private httpService: HttpService) {

    this.token = localStorage.getItem('token')

   }

  // registerUser(reqdata:any){
  //   console.log("Register User data",reqdata)
  //   return this.httpService.Post('/user/userSignUp',reqdata)
  // }
  
  // loginUser(reqdata:any){
  //   console.log("Login User data",reqdata)
  //   return this.httpService.Post('/user/login',reqdata)
  // }

  // forgetUser(reqdata:any){
  //   console.log("Forget User data",reqdata)
  //   return this.httpService.Post('/user/reset',reqdata)
  // }

  // resetUser(reqdata:any,token:any){
  //   console.log("Reset User data",reqdata)
  //   return this.httpService.Post(`/user/reset-password`,reqdata)
  // }

  

  loginUser(reqdata:any){

    let httpAuthOptions = { 

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
        })
      };

    console.log("Login User data",reqdata)
    return this.httpService.postService(this.BaseUrl+'/user/login',reqdata,false,httpAuthOptions)
  
  }

  forgetUser(reqdata:any){

    let httpAuthOptions = { 

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
        })
      };

    console.log("Forget User data",reqdata)
    return this.httpService.postService(this.BaseUrl+'/user/reset',reqdata,false,httpAuthOptions)
  }

  resetUser(reqdata:any,token:any){

    let httpAuthOptions = { 

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
        })
      };

    console.log("Reset User data",reqdata)
    return this.httpService.postService(this.BaseUrl+'/user/reset-password',reqdata,false,httpAuthOptions)
  }

  registerUser(reqdata:any){

    let httpAuthOptions = { 

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
        })
      };

    console.log("Register User",reqdata)
    return this.httpService.postService(this.BaseUrl+'/user/userSignUp',reqdata,false,httpAuthOptions)

  }


  // loginuser(reqdata:any,token:any){
    
  //   let httpOptions = { 

  //     headers: new HttpHeaders ({
  //       'Content-Type': 'application/json',
  //       'Authorization': token
  //     })
  //   };
  //   return this.httpService.postService('')
  // }



}
