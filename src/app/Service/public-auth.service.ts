import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

//Authguard for the public module
export class PublicAuthService implements CanActivate{

  constructor(private router: Router) { }
  canActivate(): boolean{

    if(localStorage.getItem('data')==null)
    return true;

    else{
    this.router.navigate(['private/navbar']);
    return false;
    }
}
}
