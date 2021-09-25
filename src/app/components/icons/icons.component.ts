import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  getNotes: any;

  constructor(private noteService: NoteService,private SnackBar:MatSnackBar) { }

  @Input() notecard:any;

  ngOnInit(): void {
  }

//     openDialog(notecard: any): void {
//     const dialogRef = this.dialog.open(UpdatenoteComponent, {
//       width:'250px',
     
//     data: notecard
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('Dialog was closed',result );
//     });
//   }
// }

  deleteNotes() {
    let noteData = {
      noteIdList: [this.notecard.id],
      isDeleted: false,
    };
    this.noteService.deleteNoteService(noteData).subscribe(
      (result:any) => {
        this.SnackBar.open('Note Deleted', 'Close', {
          duration: 3000,
        });
      },
      (err:any) => {
        this.SnackBar.open('Error during delete note', 'Try Again', {
          duration: 3000,
        });
      }
    );
  }

}
