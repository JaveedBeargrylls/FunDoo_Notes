import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ComponentsComponent } from './components/components.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoComponent } from './components/demo/demo.component';
import { HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { TakenoteComponent } from './components/takenote/takenote.component';
import { DisplayComponent } from './components/display/display.component';
import { MatCardModule } from '@angular/material/card';
import { IconsComponent } from './components/icons/icons.component';
import { AuthguardServiceService } from './services/Authguard/authguard-service.service';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateNotesComponent } from './components/update-notes/update-notes.component';
import {MatMenuModule} from '@angular/material/menu';
import { ArchiveComponent } from './components/archive/archive.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DemoComponent,
    DashboardComponent,
    GetallnotesComponent,
    TakenoteComponent,
    DisplayComponent,
    IconsComponent,
    UpdateNotesComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatCheckboxModule,FormsModule,ReactiveFormsModule,FlexLayoutModule,
    HttpClientModule,MatSnackBarModule,MatSidenavModule,MatIconModule,MatToolbarModule
    ,MatListModule,MatCardModule,MatDialogModule, MatMenuModule,
  ],

  providers: [

    AuthguardServiceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
