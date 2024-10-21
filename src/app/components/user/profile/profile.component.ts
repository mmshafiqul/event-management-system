import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  constructor(private userService: UserService, private router:Router) { }
  ngOnInit(): void {
    if (!this.isloggedIn()){
      this.router.navigate(['/'])
    }
  }

  isloggedIn() {
    return this.userService.loggedinUser !== undefined
  }

}
