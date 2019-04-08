import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

constructor(private http:HttpClient) { }

//Get user information by matching the login forms' value 
getUserInfo(par){
    // console.log(par);
     return  this.http.get('http://localhost:3000/user',{
       params:par
     });
}

//get Bookings info based on the past or upcoming keys
getBookingsInfo(upOrpastData){
  // console.log(par);
   return  this.http.get('http://localhost:3000/bookingsData',{
     params: upOrpastData
   });
}

//get faqs data 
getFAQsData(){

  return this.http.get('http://localhost:3000/faqsData');
}

//get total no. of bookings 
getBookingsCount(){

  return this.http.get('http://localhost:3000/bookingsData');
}

//get user's info based on the id
getById(id) {
  return this.http.get('http://localhost:3000/user/'+id);
}
}