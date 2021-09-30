import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/noteService/note.service'

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  
  NotesList = [] // use any to store the data in notelist
  
  constructor(private noteService: NoteService) { }
  
  ngOnInit(){

    this.getAllNotes()
  }


  getAllNotes(){

    let notes = [];


    this.noteService.getAllNoteService().subscribe(
    
      
        (response:any) => { console.log(response);

          notes = response.data.data;

          // notes.filter((data:any) => data.isArchived != true && data.isDeleted != true);

          this.NotesList = notes.filter((data:any) => data.isArchived != true && data.isDeleted != true);

          // notes.filter((data:any) => data.isArchived != true && data.isDeleted != true);
          
          this.NotesList.reverse()
          console.log("noteList ",this.NotesList)
        },
        
        error => {console.log(error);

        }
    )

  }

}
