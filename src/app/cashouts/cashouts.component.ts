import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cashouts',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent],
  templateUrl: './cashouts.component.html',
  styleUrl: './cashouts.component.css'
})
export class CashoutsComponent {

}
