import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';
import { NgFor, NgIf } from '@angular/common';
import { UserService } from '../services/user/user.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-master-list',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent, NgIf, NgFor],
  templateUrl: './master-list.component.html',
  styleUrl: './master-list.component.css'
})
export class MasterListComponent implements OnInit {
  constructor(private userService: UserService) { }
  users: UserModel[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
