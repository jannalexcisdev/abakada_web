import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  submitted = false;
  errorMessage: string | undefined;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  login(): void {
    const user = {
      username: this.username,
      password: this.password
    }

    this.userService.login(user.username, user.password).subscribe({
      next: (response) => {
        console.log(response);
        this.submitted = true;
        this.router.navigate(['/dashboard'])
      },
      error: (error) => {
        console.log(error);
        if (error?.error?.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'An unexpected error occurred.';
        }
      }
    })
  }
}
