import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../../services/noteService/note.service'

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {
  
  labelList:any;
  label: any;
  
  show=true;
  sample:any;
  constructor(private noteService: NoteService, private SnackBar:MatSnackBar) { }

  ngOnInit(): void {

    this.getLabels()
  }

  onOpen(){
    this.show = false;
  }

  onClose(){
    this.show = true;
  }

  onCreate(){
    this.show = true;
  
    let data = {
      label: this.label,
      isDeleted: false,
      userId: localStorage.getItem('userId')

    }

    this.noteService.createLabels(data).subscribe(

      (response:any) => {

        console.log(response);
        
        this.label = null;
        this.SnackBar.open("Label Created",'',{duration:2000,});
      },
      (error:any) => {
        console.log(error);
        
        this.SnackBar.open("Error occured at create label",'try Again',{duration:2000,});
      });
  
  }

  getLabels(){

    this.noteService.getLabels().subscribe(
        
        (response:any) => { console.log(response.data.details);
          console.log(response);
          
          this.labelList=response['data'].details
          // this.labelList = response.data.details;
          
          console.log('labelLIst',this.labelList)
          
          
          // console.log("noteList ",this.labelList)
          // this.snackBar.open('Archived','',{duration:2000,})

        },
        
        error => {console.log(error);

          // this.SnackBar.open('Error Occured','try Again',{duration:2000,})
        });
      }

      onDeleteLabel(labeldata:any) {
        this.show = true;
  
        let data = {
          label: labeldata,
          isDeleted: false,
          userId: localStorage.getItem('userId')
    
        }


    
        this.noteService.deleteLabels(data).subscribe(
    
          (response:any) => {
            
            console.log('deleted Data',data);
            console.log(response);
            
            this.SnackBar.open("Label Deleted",'',{duration:2000,});
          },
          (error:any) => {
            console.log(error);
            
            this.SnackBar.open("Error occured at delete label",'try Again',{duration:2000,});
          });
      
      }

      onUpdate(labeldata:any){
        this.show = true;

        let data = {
          label: labeldata,
          isDeleted: false,
          userId: localStorage.getItem('userId')
    
        }

        
        console.log('updated Data',data.label.id);
        this.noteService.updateLabels(data).subscribe(
          
          (response:any) => {
            
            
            console.log(response);
            
            this.SnackBar.open("Label Updated",'',{duration:2000,});
          },
          (error:any) => {
            console.log(error);
            
            this.SnackBar.open("Error occured at update label",'try Again',{duration:2000,});
          });  
      }

      }
