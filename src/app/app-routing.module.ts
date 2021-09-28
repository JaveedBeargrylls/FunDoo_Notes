import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DemoComponent } from './components/demo/demo.component';
import { DisplayComponent } from './components/display/display.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TakenoteComponent } from './components/takenote/takenote.component';

import { LoginComponent } from './components/login/login.component';
// import { HomeComponent } from './components/home/home.component';
import { AunthenticationGuard } from './AuthGuard/aunthentication.guard'

const routes: Routes = [
  {path:'demo',component:DemoComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'resetpassword/:token',component:ResetPasswordComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent, canActivate:[AunthenticationGuard],
  children:[
          {path:'',redirectTo:'home',pathMatch:'full'},
          {path:'home',component:GetallnotesComponent},
          {path:'display',component:DisplayComponent},
          {path:'takenote',component:TakenoteComponent},

          ]},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
