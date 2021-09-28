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

  // setColor(color: any){
    
  //   console.log('color',color);
  //   let data={
  //     id: this.NoteArray['id'],
  //     color: color,
  //   };
  //   console.log(data);
  //   this.noteService.changeColor(color).subscribe(
  //     (response:any)=>{ 
  //       // this.getNotes.emit(color)
  //       console.log('Response of setColour',response);
  //       this.snackBar.open('Change the background color','',{duration:2000,})
  //     },
  //     (error:any) => {
  //       this.snackBar.open('Error occured color Note','try Again',{duration:2000,})
  //     }
  //     );
  //  }





   
  //  setArchive(){
  //    let notedata = { 
  //      noteIdList: [this.NoteArray.id],
  //      isArchived: true,
  //    };
  //    this.noteService.archiveNote(notedata).subscribe( 
  //      (response) => {
  //        this.getNotes.emit();
  //        this.snackBar.open('Archived note','',{duration:2000,});
  //      },
  //      (error) => { 
  //        this.snackBar.open('Error occured at archived note','try Again',{duration:2000,});
  //      });
  //  }

  //  setUnArchive(){
  //    let notedata = { 
  //      noteIdList: [this.NoteArray.id],
  //      isArchived: true,
  //    };
  //    this.noteService.unArchiveNote(notedata).subscribe( 
  //      (response) => {
  //        this.getNotes.emit();
  //        this.snackBar.open('Archived note','',{duration:2000,});
  //      },
  //      (error) => { 
  //        this.snackBar.open('Error occured at archived note','try Again',{duration:2000,});
  //      });
  //  }

  
  openDialog(notecard:any){
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '250px',
      data: notecard
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

}
