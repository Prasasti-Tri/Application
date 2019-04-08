import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PublicAuthService } from '../Service/public-auth.service';

//Routing of public modules
const routes: Routes = [
  { 
    path:'register', 
  component: RegisterFormComponent,
  canActivate: [PublicAuthService]
},
  { 
    path: 'login',
   component: LoginFormComponent,
   canActivate: [PublicAuthService]
   },

  { 
    path:'', 
    redirectTo: '/public/register',
    pathMatch: 'full'
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
