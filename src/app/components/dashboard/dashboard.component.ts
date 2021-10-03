import { Component, Input, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { EditLabelComponent } from '../edit-label/edit-label.component';
import { NoteService } from 'src/app/services/noteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  title:any;

  labelList:any;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,public dialog: MatDialog, private noteService: NoteService, private snackBar:MatSnackBar) {}

  // @Input() LabelArray: any


  ngOnInit(){
    this.title = "FundooNotes"
    // console.log(this.LabelArray)
    this.getLabels()
  }

  openDialogLabels(){
    const dialogRef = this.dialog.open(EditLabelComponent, {
      width: '370px',
      height: '',
      // data: labeldata
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  getLabels(){

    this.noteService.getLabels().subscribe(
        
        (response:any) => { console.log(response.data.details);
          console.log(response);
          
          this.labelList=response['data'].details
          // this.labelList = response.data.details;
          
          console.log('labelLIst',this.labelList)
          
          
          // console.log("noteList ",this.labelList)
          // this.snackBar.open('Archived','',{duration:2000,})

        },
        
        error => {console.log(error);

          this.snackBar.open('Error Occured','try Again',{duration:2000,})
        });
      }
  refresh(){
    location.reload();
  }
}
