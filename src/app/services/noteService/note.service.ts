import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
  BaseUrl=environment.BaseUrl
  token:any
    constructor(private httpService:HttpService ) { 
      this.token = localStorage.getItem('token')
    }
   
    // createNote( request:any){
    //   this.httpService.Post('notes/addNotes',request)
  
    // }
  
  
    createNote(data:any) : Observable<any>{
      let httpAuthOptions = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': this.token
        })
      };
      console.log(httpAuthOptions); // to check the value of httpAuthOptions to get ride of an error 


      return this.httpService.postService(this.BaseUrl + '/notes/addNotes',data, true, httpAuthOptions);
  
    }
  
  
    getAllNoteService(){
      let httpAuthOptions = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': this.token
        })
      };
      // console.log(httpAuthOptions); 
      
      return this.httpService.getService(this.BaseUrl + '/notes/getNotesList', true, httpAuthOptions);
  
    }

    updateNoteService(data:any){

      let httpAuthOptions = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': this.token
        })
      };

      return this.httpService.postService(this.BaseUrl+'/notes/updateNotes',data,true,httpAuthOptions);

      }


/********Change Color ******POST*****/
    changeColor(data:any){
      let httpAuthOptions = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': this.token
        })
      };
      console.log(data);
      console.log(httpAuthOptions);
      
      return this.httpService.postService(this.BaseUrl+'/notes/changesColorNotes',data,true, httpAuthOptions);
    }

  /*******Archive*****POST****/

  archiveNotes(data:any){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log(httpAuthOptions);

    return this.httpService.postService(this.BaseUrl+'/notes/archiveNotes',data,true, httpAuthOptions);
          
  }

/******Get Archvie ****GET***/
  getArchiveNotes(){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
  console.log(httpAuthOptions);
  
    return this.httpService.getService(this.BaseUrl+'/notes/getArchiveNotesList',true, httpAuthOptions);
              
  }

  
/****TrashNote ***POST****/
  trashNote(data: any){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log(httpAuthOptions);

    return this.httpService.postService(this.BaseUrl+'/notes/trashNotes',data,true, httpAuthOptions);
          
  }


  /************ Trash-Notes *****GET*****/
    getTrashNoteService(){
      let httpAuthOptions = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': this.token
        })
      };
      console.log(httpAuthOptions);

      return this.httpService.getService(this.BaseUrl+'/notes/getTrashNotesList',true, httpAuthOptions);
      
    }

/************ Delete_Notes *****POST*****/
  deleteForEverNotes(data:any){

    let httpAuthOptions = {
      headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    })
  };
    return this.httpService.postService(this.BaseUrl+'/notes/deleteForeverNotes',data,true,httpAuthOptions);
}

/****************labelService*****POST*******/

createLabels(data:any) : Observable<any>{
  let httpAuthOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    })
  };
  console.log(httpAuthOptions); // to check the value of httpAuthOptions to get ride of an error 

  return this.httpService.postService(this.BaseUrl +'/noteLabels',data, true, httpAuthOptions);

}

/****************labelService*****GET*******/
getLabels(){
  let httpAuthOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    })
  };
  console.log(httpAuthOptions);

  return this.httpService.getService(this.BaseUrl+'/noteLabels/getNoteLabelList',true, httpAuthOptions);
        
}


    // unArchiveNote(data:any){
    //   let httpAuthOptions = {
    //     headers:new HttpHeaders({
    //       'Content-Type':'application/json',
    //       'Authorization': this.token
    //     })
    //   };
    //   console.log(data);
    //   console.log(httpAuthOptions);

    //   return this.httpService.postService(this.BaseUrl+'notes/archiveNotes',data,true, httpAuthOptions);
            
    // }
  }