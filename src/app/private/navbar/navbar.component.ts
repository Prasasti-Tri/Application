import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GetApiService } from 'src/app/Service/get-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: string;
  posts: any;
  count: any;
  header: string;
  header1: string;
  header2: string;
  my: string;
  bookings: string;

  constructor(private router: Router,private service: GetApiService) { 
    router.events.subscribe(
      event => (event instanceof NavigationEnd) && this.handleRouteChange()
    );
  }

  ngOnInit() {
    //getBookingsCount() hits ths API and counts the length of bookingsInfo(array of objects in db.json) 
    this.service.getBookingsCount().subscribe(response => {
      this.posts= response;
      this.count = this.posts.length;
      console.log(this.count);
    })
    this.name = localStorage.getItem('name');
    // console.log(name);
    this.router.navigate(['/private/navbar/details']);
  }

  //display different headings with changing routes
  handleRouteChange(){
    //heading for PROFILE page
    if(this.router.url.includes('details')){
      this.header1="";
      this.header2="";
      this.my = "";
      this.bookings = "";
      this.header = 'PROFILE';
    }
    //heading for MY BOOKINGS page
    if(this.router.url.includes('mybookings')){
      this.header="";
      this.header2="";
      this.header1 = 'MY BOOKINGS';
      var str = this.header1.split(' ');
      this.my = str[0];
      this.bookings = str[1];
    }
    //heading for FAQs page
    if(this.router.url.includes('faqs')){
      this.header="";
      this.header1="";
      this.my = "";
      this.bookings = "";
      this.header2 = 'FAQs';
    }
  }
  
  //logout() to clear the local storage
  logout(){
    localStorage.clear();
  }
}
