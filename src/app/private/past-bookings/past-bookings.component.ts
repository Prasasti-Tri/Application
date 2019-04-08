import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/Service/get-api.service';

@Component({
  selector: 'app-past-bookings',
  templateUrl: './past-bookings.component.html',
  styleUrls: ['./past-bookings.component.css']
})
export class PastBookingsComponent implements OnInit {

  constructor(private service: GetApiService) { }

  posts: any=[];

  ngOnInit() {

    //To get past bookings data on the basis of key i.e; past and upcoming
    this.service.getBookingsInfo({"past":true}).subscribe(response => {
      this.posts= response;
      // var json = JSON.parse(this.posts);
      console.log("Past data");
      console.log(response);

    })


  }

}
