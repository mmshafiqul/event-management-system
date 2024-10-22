import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corrected from styleUrl to styleUrls
})
export class RegisterComponent implements OnInit {
  private container: HTMLElement | null = null;
  containerRef=viewChild.required<ElementRef<HTMLElement>>('cont');
  loginEmail = "";
  loginPassword = "";

  userName = "";
  email = "";
  password = "";

  successMessage = '';
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    // this.container = document.getElementById('container');

    this.initialize();

  }

  private initialize(): void {
    // Set the initial class after a timeout
    setTimeout(() => {
        this.containerRef().nativeElement.classList.add('sign-in');
    }, 200);
  }

  public toggle = (): void => {
    
      this.containerRef().nativeElement.classList.toggle('sign-in');
      this.containerRef().nativeElement.classList.toggle('sign-up');
    
  }
// user registration
  register(): void {
    const user: User = {
      uName: this.userName,
      uEmail: this.email,
      uPassword: this.password

    }
    this.userService.userRegistration(user).subscribe(() => {
      alert("Your registration is successful...!")
      this.toggle();
    })
  }

// User loogin
  login(): void {
    this.userService.findUserByEmail(this.loginEmail).subscribe((res) => {
      if (res.length > 0) {
        if (this.loginPassword === res[0].uPassword) {
          this.userService.loggedinUser = res[0];
          localStorage.setItem('user', res[0].id!);
          this.router.navigate(['/user-events'])
        } else {
          alert("Invaild credential!")
        }
      } else {
        alert("Invaild credential!")
      }
    })
  }


}

// Usage example
// const registerComponent = new RegisterComponent();
// registerComponent.toggle();


