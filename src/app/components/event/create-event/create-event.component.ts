import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent  {
  userId = "";
  title = "";
  description = "";
  start = "";
  end = "";
  price = 0;
  seat = 0;
  postedDate="";

  constructor(private eventService: EventService, private router: Router, private userService: UserService) { }



  createEvent(): void {
    const event: Event = {
      userId: this.userService.loggedinUser!.id!,
      title: this.title,
      description: this.description,
      start: this.start,
      end: this.end,
      price: this.price,
      seat: this.seat,
      postedDate:new Date().toJSON(),

    }
    this.eventService.createEvent(event).subscribe((res) => {
      console.log(res)
      alert("Event created successfully...")
      this.router.navigate(['/user-events'])
      
    })

  }

}
