import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from '../../services/noteService/note.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  labelNotes = []

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {

    this.getLabelNotes()
  }

  /*******Labels*******Get****/

  getLabelNotes(){


  }
  

}
