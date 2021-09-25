import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from '../../services/noteService/note.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  public title:any
  public description:any

  constructor( private noteService:NoteService,
    public dialogRef: MatDialogRef<UpdateNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {

      console.log(data);
      this.title=data.title
      this.description=data.description

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

//   openDialog(){

//     this.dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed',result);

//   });
// }


  updateNote(){

    let request ={
      noteId: this.data.id,
      title: this.title,
      description: this.description
    }

    this.noteService.updateNoteService(request).subscribe((result)=>{
      console.log(result);
      this.dialogRef.close();
    
    })
  }

}