import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  demoForm! : FormGroup

  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.demoForm= this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }
  get f() { return this.demoForm.controls; }
}
