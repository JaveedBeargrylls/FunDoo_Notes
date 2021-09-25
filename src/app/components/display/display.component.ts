import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { NoteService } from '../../services/noteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {


  constructor(public dialog: MatDialog,private noteService:NoteService, private snackBar:MatSnackBar) { }

  @Input() NoteArray: any;



  @Output() getNotes: EventEmitter<any> = new EventEmitter();

  ngOnInit(){
    
    console.log(this.NoteArray);
    
  }
  
  openDialog(data:any){
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '250px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //   deleteNotes() {
  //   let noteData = {
  //     noteIdList: [this.notecard.id],
  //     isDeleted: true,
  //   };
  //   this.noteService.deleteNoteService(noteData).subscribe(
  //     (result:any) => {
  //       console.log(result);
  //       this.snackBar.open('Note Deleted', 'Close', {
  //         duration: 3000,
  //       });
  //     },
  //     (err:any) => {
  //       this.snackBar.open('Error during delete note', 'Try Again', {
  //         duration: 3000,
  //       });
  //     }
  //   );
  // }


}
