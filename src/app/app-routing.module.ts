import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'public',loadChildren:'./public/public.module#PublicModule'},
  { path:'private',loadChildren:'./private/private.module#PrivateModule'},
  { path:'', redirectTo:'/public/register', pathMatch: 'full'},
  {path: '**', redirectTo: '/public/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
