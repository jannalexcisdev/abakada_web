import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userModel: UserModel = {} as UserModel;
  submitted = false;
  errorMessage: string | undefined;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  register(): void {
    const userModel = {
      firstName: this.userModel.firstName,
      lastName: this.userModel.lastName,
      username: this.userModel.username,
      email: this.userModel.email,
      password: this.userModel.password,
    }

    this.userService.register(userModel).subscribe({
      next:(response)=> {
        console.log(response)
        this.submitted = true;
        this.router.navigate([''])
      },
      error: (error) => {
        console.log(error)
        if (error?.error?.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'An unexpected error occured'
        }
      }
    })
  }
}
