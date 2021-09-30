import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../../services/noteService/note.service'

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {
  
  label: any;
  show=true;
  constructor(private noteService: NoteService, private SnackBar:MatSnackBar) { }

  ngOnInit(): void {
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

}
