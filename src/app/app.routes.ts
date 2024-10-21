import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { CreateEventComponent } from './components/event/create-event/create-event.component';
import { EditEventComponent } from './components/event/edit-event/edit-event.component';
import { BookingComponent } from './components/booking/booking.component';
import { ErrorComponent } from './components/error/error.component';
import { EventDetailComponent } from './components/event/event-detail/event-detail.component';
import { UserEventListComponent } from './components/event/user-event-list/user-event-list.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'user', component: ProfileComponent },
    { path: 'events', component: EventListComponent },
    {path: 'user-events', component:UserEventListComponent},
    { path: 'create-event', component: CreateEventComponent },
    { path: 'events/event-details/:id', component: EventDetailComponent },
    { path: 'edit-event/:id', component: EditEventComponent },
    { path: 'booking', component: BookingComponent },
    { path: '**', component: ErrorComponent }

];
