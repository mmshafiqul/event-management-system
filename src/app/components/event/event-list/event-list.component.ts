import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent implements OnInit {

  // events: Event[] = [];

  // constructor(private event: EventService) {

  // }

  // ngOnInit(): void {
  //   this.event.getEvent().subscribe((res)=>{
  //     this.events = res;
  //   })
  // }

  events: Event[] = [];
  paginatedEvents: Event[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 16;
  totalPages: number = 0;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe((res) => {
      this.events = res.sort((a: Event, b: Event) => new Date(a.start).getTime() - new Date(b.start).getTime());
      this.totalPages = Math.ceil(this.events.length / this.itemsPerPage);
      this.updatePaginatedEvents();
    });
  }

  updatePaginatedEvents(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedEvents = this.events.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedEvents();
  }

}
