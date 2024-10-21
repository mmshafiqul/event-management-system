import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  upcomingEvents = [
    {
      id: 'E001',
      title: 'Tech Conference 2024',
      description: 'A comprehensive conference on emerging technologies and innovative solutions shaping the future.',
    },
    {
      id: 'E002',
      title: 'Music Fest 2024',
      description: 'Experience the best music from top artists around the globe in a thrilling live event.',
    },
    {
      id: 'E003',
      title: 'Startup Expo 2024',
      description: 'Connect with the best startups, investors, and thought leaders in the world of innovation.',
    },
  ];

  truncateText(text: string, length: number): string {
    return text.length > length ? text.substring(0, length) + '...' : text;
  }

}
