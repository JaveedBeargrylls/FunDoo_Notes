import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
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

  openDialog(notecard:any){
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '400px',
      height:'250px',
      data: notecard
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

}
