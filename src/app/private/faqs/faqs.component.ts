import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/Service/get-api.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  posts: any;

  constructor(private service: GetApiService) { }

  ngOnInit() {

    //getting FAQs data by hitting getFAQsData() API
    this.service.getFAQsData().subscribe(response => {
      this.posts= response;//saving the response
      console.log("FAQs data");
      console.log(response);
    })
  }
 }

