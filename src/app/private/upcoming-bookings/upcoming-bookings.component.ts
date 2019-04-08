import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/Service/get-api.service';

@Component({
  selector: 'app-upcoming-bookings',
  templateUrl: './upcoming-bookings.component.html',
  styleUrls: ['./upcoming-bookings.component.css']
})

//To get upcoming bookings data on the basis of key i.e; past and upcoming
export class UpcomingBookingsComponent implements OnInit {

  constructor(private service: GetApiService) { }
  posts:any;

  ngOnInit() {
    this.service.getBookingsInfo({"upcoming":true}).subscribe(response => {
      this.posts= response;
      console.log("Upcoming data");
      console.log(response);
    })
  }

}
