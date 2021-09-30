import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {



  isArchived = false;
  isDeleted = false;

  @Input() notecard:any;
  @Input() color:any;


  
  /*** @see [Input and Output properties](guide/inputs-outputs)
        (bindingPropertyName?: string): any;
    new (bindingPropertyName?: string): any; 
  
    >>this property value is bound to a different property name
    >>when this component is instantiated in a template. **/

  @Output() colorRefresh: EventEmitter<any> = new EventEmitter();
  @Output() archiveRefresh: EventEmitter<any> = new EventEmitter();
  @Output() deleteRefresh: EventEmitter<any> = new EventEmitter();

  // @Output() unarchive: EventEmitter<any> = new EventEmitter();

  constructor(private noteService: NoteService,private snackBar:MatSnackBar) { }

  

  ngOnInit(): void {

    // this.archiveNote()
   }

  colors:Array<any> = [

    { code: '#FFFFFF', name:'White'},
    { code: '#C24641', name:'Cherry Red'},
    { code: '#800080', name:'Purple'},
    { code: '#FFC0CB', name:'Pink'},
    { code: '#ADD8E6', name:'LightBlue'},
    { code: '#FFA500', name:'Orange'},
    { code: '#008000', name:'Olive'},
    { code: '#00FFFF', name:'Cyan'},
    { code: '#52595D', name:'Iron Gray'},
    { code: '#CECECE', name:'Platinum Silver'},
    { code: '#9AFEFF', name:'Electric Blue'},
    { code: '#FFE5B4', name:'Peach'},
  ];
  // setColor(color:any){

  //   let data = {
  //     color: color,
  //     noteIdList: [this.notecard.id],
  //   }
  //   this.color.emit(data);
  // }


  /*****SetColor******/

  setColor(color: any){
    this.notecard.color = color;
    console.log('color',color);
    let data = {
      color: color,
      noteIdList: [this.notecard.id],
    }
    console.log(data);
    this.noteService.changeColor(data).subscribe(
      (response:any)=>{ 
        this.color.emit()
        console.log('Response of setColour',response);
        this.snackBar.open('Changed the background color','',{duration:2000,})
      },
      (error:any) => {
        console.log('archive Error at icons methods',error);
        
        this.snackBar.open('Error occured color Note','try Again',{duration:2000,})
      }
      );
      window.location.reload();
   }

  
  /**********ArchiveNote & unArchiveNote*************/ 

   archiveNote(){

    let data ={

      noteIdList: [this.notecard.id],
      isArchived: !this.isArchived
    }

    console.log(data);
    this.noteService.archiveNotes(data).subscribe(
      (response:any) => {
        
        console.log('archiveResponse',response);
        this.archiveRefresh.emit()
        this.snackBar.open('Archived','',{duration:2000,})
      },
      (error:any) => {
        console.log('archive Error', error);
        this.snackBar.open('Error occured during arcive','try Again',{duration:2000,})
      });
      window.location.reload();
   }

   unArchiveNote(){

    let data ={

      noteIdList: [this.notecard.id],
      isArchived: this.isArchived
    }

    console.log(data);
    this.noteService.archiveNotes(data).subscribe(
      (response:any) => {
        
        console.log('archiveResponse',response);
        this.archiveRefresh.emit()
        this.snackBar.open('UnArchived','',{duration:2000,})
      },
      (error:any) => {
        console.log('UnArchive Error', error);
        this.snackBar.open('Error occured during unArchive','try Again',{duration:2000,})
      });
      window.location.reload();
   }


  /**********trashNote_&_DeleteNote_&_Restore************/ 

  trashNote(){

    let data ={

      noteIdList: [this.notecard.id],
      isDeleted: !this.isDeleted
    }
// bothe delte
    console.log(data);
    this.noteService.trashNote(data).subscribe(
      (response:any) => {
        
        console.log('deleteResponse',response);
        this.snackBar.open('Moved to Trash','close',{duration:2000,})
      },
      (error:any) => {
        console.log('delete Error', error);
        this.snackBar.open('Error occured during trashNote','try Again',{duration:2000,})
      });
      window.location.reload();
   }

 
  deleteNote() {
    let deletedData = {
      noteIdList: [this.notecard.id],
      isDeleted: false,
    };
    console.log(deletedData);
    this.noteService.deleteForEverNotes(deletedData).subscribe(
      (result) => {

        console.log(result);

        this.snackBar.open('Note Deleted', 'Close', {duration: 3000,});
      },
      (err:any) => {
        this.snackBar.open('Error during delete note', 'Try Again', {
          duration: 3000,
        });
      });
      window.location.reload();
  }

  restore() {
    let restoreData = {
      noteIdList: [this.notecard.id],
      isDeleted: false,
    };
    console.log(restoreData);
    this.noteService.trashNote(restoreData).subscribe(
      (result) => {

        console.log(result);

        this.snackBar.open('Restored', 'Close', {duration: 3000,});
      },
      (err:any) => {
        this.snackBar.open('Error during restore note', 'Try Again', {
          duration: 3000,
        });
      });
      window.location.reload();
  }

}



  // archiveNote(){
  //   this.archive.emit();
  // }
  // unArchiveNote(){
  //   this.unarchive.emit();
  // }


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
