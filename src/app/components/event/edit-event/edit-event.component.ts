import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [ FormsModule, CommonModule, RouterLink],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent implements OnInit {

  event: Event = { id: '', title: '', description: '', start: '', end: '', seat: 0, postedDate: '', price: 0, userId: '' };
  isEditMode: boolean = false;

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.isEditMode = true;
      this.eventService.getEventById(eventId).subscribe((event) => {
        this.event = event;
      });
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.eventService.updateEvent(this.event).subscribe(() => {
        alert("Your event is updated successsfullly...")
        this.router.navigate(['/user-events']);
      });
    } else {
      this.eventService.createEvent(this.event).subscribe(() => {
        this.router.navigate(['/user-events']);
      });
    }
  }


}
