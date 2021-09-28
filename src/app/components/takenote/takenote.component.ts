import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../../services/noteService/note.service'

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  
  show = false;
  title: any;
  description: any;

  @Output() refresh: EventEmitter<any> = new EventEmitter();
  


  constructor(private noteService: NoteService, private SnackBar:MatSnackBar) { }
  

  ngOnInit(): void {
  }

  
  onOpen(){
    this.show = true;
  }

  onClose(){

    let data={
      
      title: this.title,
      description: this.description
    };

    this.noteService.createNote(data).subscribe(

      (response: any) => {
        this.refresh.emit({})
        this.title = null;
        this.description = null;
        this.SnackBar.open("Note Added Sucessfully",'',{duration: 3000,});
      },
      (error: any) => {

        this.SnackBar.open("Note Wasnot added !",'Try Again',{duration: 3000,});
      }
    );
    this.show=false;
  }

  // cateNote(){

  //   let request = {

  //       title: 'this is a testing note',
  //       description: 'this is testing description'
  //   }

  //   this.noteService.createNote(request).subscribe(
        
  //     (response:any) => { console.log(response.status.details);

  //       // let message = response.status.details

  //       // this.createNoteRefresh.emit(message)
  //       console.log(response);
        
      
  //     },
  //     (error:any) => { console.log(error)}
    
  //   )

  //   this.show = false
  // }
}
