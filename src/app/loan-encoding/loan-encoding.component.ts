import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-loan-encoding',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent ],
  templateUrl: './loan-encoding.component.html',
  styleUrl: './loan-encoding.component.css'
})
export class LoanEncodingComponent {

}
