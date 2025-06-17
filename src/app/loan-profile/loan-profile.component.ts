import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-loan-profile',
  standalone: true,
  imports: [HeaderComponent, NavigationComponent],
  templateUrl: './loan-profile.component.html',
  styleUrl: './loan-profile.component.css'
})
export class LoanProfileComponent {

}
