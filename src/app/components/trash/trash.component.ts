import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  NotesList = [] // use any to store the data in notelist

  constructor(private noteService: NoteService, private snackBar:MatSnackBar) { }

  ngOnInit(){


    this.getTrashNotes()
  }


  getTrashNotes(){

    this.noteService.getTrashNoteService().subscribe(
        
        (response:any) => { console.log(response);
          
          this.NotesList = response.data.data;
          
          this.NotesList.reverse()
          console.log("noteList ",this.NotesList)
          this.snackBar.open('Moved to Trash Bin','',{duration:2000,})

        },
        
        (error:any) => {console.log(error);
        this.snackBar.open('Error Occured','try Again',{duration:2000,})

        }
    )
      }
  }
