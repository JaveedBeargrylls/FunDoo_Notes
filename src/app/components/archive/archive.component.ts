import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  NotesList = [] // use any to store the data in notelist

  constructor(private noteService: NoteService, private snackBar:MatSnackBar) { }

  ngOnInit(){

    this.getArchiveNotes()
    // this.title = "Archive"
  }


  getArchiveNotes(){

    this.noteService.getArchiveNotes().subscribe(
        
        (response:any) => { console.log(response);
          
          this.NotesList = response.data.data;
          
          this.NotesList.reverse()
          console.log("noteList ",this.NotesList)
          this.snackBar.open('Archived','',{duration:2000,})

        },
        
        error => {console.log(error);
        this.snackBar.open('Error Occured','try Again',{duration:2000,})

        }
    )

  }

  // getArchiveNotes(){

  //   this.noteService.getAllNoteService().subscribe(
  //     (result:any) => { 
  //       let archiveNotes = result.data.data.filter(
  //         (element:any)=>{ 
  //           return element.isArchived == true && element.isDeleted == false;
  //         });
  //         this.allArchiveNotes = archiveNotes;
  //     });
  // }

}
