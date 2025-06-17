import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../services/user/user.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-loan-encoding',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent],
  templateUrl: './loan-encoding.component.html',
  styleUrl: './loan-encoding.component.css'
})
export class LoanEncodingComponent implements OnInit {
  users: UserModel[] = [];
  user: UserModel | null = null;
  private timeout: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data.map((user: any) => ({
        firstName: user.firstName,
        lastName: user.lastName,
        id: user.id
      }));
    });
  }

  onSearchInput(value: string): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.user = this.users.find(u => u.id === value.trim()) || null;
    }, 1000);
  }
}
