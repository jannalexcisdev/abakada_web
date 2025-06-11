import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-receipt-encoding',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent],
  templateUrl: './receipt-encoding.component.html',
  styleUrl: './receipt-encoding.component.css'
})
export class ReceiptEncodingComponent {

}
