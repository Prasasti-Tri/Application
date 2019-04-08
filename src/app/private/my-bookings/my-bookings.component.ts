import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/Service/get-api.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  posts:any;
  count:any;

  constructor(private service: GetApiService) { }

  ngOnInit() {

  }

}
