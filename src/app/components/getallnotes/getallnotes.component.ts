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

    this.noteService.getAllNoteService().subscribe(
        
        (response:any) => { console.log(response);
          
          this.NotesList = response.data.data;
          
          this.NotesList.reverse()
          console.log("noteList ",this.NotesList)
        },
        
        error => {console.log(error);

        }
    )

  }

}
