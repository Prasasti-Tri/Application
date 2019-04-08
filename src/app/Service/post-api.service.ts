import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http: HttpClient) { } 

  //Post register forms' data
  public createUser(userObj){
    console.log(userObj);
    return this.http.post("http://localhost:3000/user",userObj);
}
}
