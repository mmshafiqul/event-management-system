import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isActive: boolean = true;
constructor(private userService: UserService, private router:Router) { }

isloggedIn (){
  return this.userService.loggedinUser !==undefined
}

signOut(){
  this.userService.loggedinUser=undefined
  localStorage.removeItem('user')
  this.router.navigate(['/']);
}

}
