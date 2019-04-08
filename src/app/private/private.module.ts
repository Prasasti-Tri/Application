import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrivateRoutingModule } from './private-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { FaqsComponent } from './faqs/faqs.component';
import { UpcomingBookingsComponent } from './upcoming-bookings/upcoming-bookings.component';
import { PastBookingsComponent } from './past-bookings/past-bookings.component';



@NgModule({
  declarations: [NavbarComponent, DetailsComponent, MyBookingsComponent, FaqsComponent, UpcomingBookingsComponent, PastBookingsComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule { }
