import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  allArchiveNotes: Array<any> = [];

  ngOnInit(): void {

    // this.getArchiveNotes();

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
