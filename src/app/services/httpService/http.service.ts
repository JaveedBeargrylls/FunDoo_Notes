import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  Baseurl = environment.BaseUrl
    
  //  url: '/user/userSignUp'
   
  constructor(private router: Router,private http: HttpClient) { }
  Post(url:any,reqdata:any){
    let httpOptions={ headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    
    let FullURL= this.Baseurl + url
    return this.http.post(FullURL,reqdata)
  }
  Get(){
    
  }
  Update(){ 

  }
  Delete(){ 

  }
}
