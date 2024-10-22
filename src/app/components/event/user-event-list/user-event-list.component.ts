import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-event-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-event-list.component.html',
  styleUrl: './user-event-list.component.css'
})
export class UserEventListComponent implements OnInit {
  events: Event[] = [];

  constructor(private event: EventService, private userService: UserService) {

  }

  truncateText(text: string, length: number): string {
    return text.length > length ? text.substring(0, length) + '...' : text;
  }

  ngOnInit(): void {
    setTimeout(() =>
      this.userService.loggedinUser &&
      this.event.getEventByUserId(this.userService.loggedinUser.id!).subscribe((res) => {
        this.events = res;
      }), 1000);
  }

  confirmDelete(eventId: string): void {
    const confirmation = window.confirm('Are you sure you want to delete this event?');
    if (confirmation) {
      this.event.deleteEvent(eventId).subscribe(() => {
        this.events = this.events.filter(e => e.id !== eventId); // Remove the deleted event from the list
      });
    }
  }
  

}
