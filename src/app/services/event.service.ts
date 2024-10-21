import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  constructor(private http: HttpClient) { }

  public getEvent(): Observable<Event[]> {
    return this.http.get<Event[]>("http://localhost:3000/events")
  }
  getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(`http://localhost:3000/events/${id}`);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>("http://localhost:3000/events", event)
  }

  getEventByUserId(id: string): Observable<Event[]>{
    let params = new HttpParams().set("userId", id);
    return this.http.get<Event[]>(`http://localhost:3000/events`, {params})
  }

  // event.service.ts
  // getEventByUserId(userId: string): Observable<Event[]> {
  //   return this.http.get<Event[]>(`http://localhost:3000/events?userId=${userId}`);
  // }



  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(`http://localhost:3000/events/${event.id}`, event);
  }


  deleteEvent(eventId: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/events/${eventId}`);
  }

}
