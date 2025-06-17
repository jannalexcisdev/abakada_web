import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-receipt-database',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent],
  templateUrl: './receipt-database.component.html',
  styleUrl: './receipt-database.component.css'
})
export class ReceiptDatabaseComponent {

}
