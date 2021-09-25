import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  Baseurl = environment.BaseUrl
  // Token=localStorage.getItem("token")
  token:any
    
  //  url: '/user/userSignUp'
   
  constructor(private http: HttpClient) {

    this.token = localStorage.getItem('token')

    console.log(this.token);

   }

   postService(url: string='',payload: any, tokenRequired: boolean = false, httpOptions:any) {

    // console.log(url);
    // // console.log(url); // to get ride of an error during the null type
    // console.log(tokenRequired);
    // console.log(httpOptions);
    // console.log(payload);
    return this.http.post( url, payload, tokenRequired && httpOptions );
  }
   


  // post(url:any,reqdata:any){
  //   this.token=localStorage.getItem("Token")
   
  //   let httpOptions={ headers: new HttpHeaders(
  //       { 
  //         'Content-Type': 'application/json',
  //         'Authorization':this.token
  //       }) };
    
  //   let FullURL= this.Baseurl + url
  //   return this.http.post(FullURL,reqdata,httpOptions)
  // }


  
  getService(url: string='', tokenRequired: boolean = false, httpOptions:any=null) {

    console.log(url);
    console.log(tokenRequired);
    console.log(httpOptions);

    
    return this.http.get( url, tokenRequired && httpOptions );
  }
  
  

  // putService(url: string='', tokenRequired: boolean = false, httpOptions:any=null) {

  //   console.log(url);

  //   return this.http.put( url, tokenRequired && httpOptions );
  // }

}
