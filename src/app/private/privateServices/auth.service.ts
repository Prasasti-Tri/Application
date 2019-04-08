import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

//Authguard implementation for the private module
export class AuthService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean{

    if(localStorage.getItem('data')!=null)
    return true;

    else{
    this.router.navigate(['/public/login']);
    return false;
    }

  }
}
