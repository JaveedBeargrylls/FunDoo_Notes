import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DemoComponent } from './components/demo/demo.component';
import { DisplayComponent } from './components/display/display.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


const routes: Routes = [
  {path:'demo',component:DemoComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'resetpassword/:token',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
          {path:'',redirectTo:'login',pathMatch:'full'},
          {path:'home',component:GetallnotesComponent},
          {path:'display',component:DisplayComponent}
          ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
