import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-settle-payment',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent],
  templateUrl: './settle-payment.component.html',
  styleUrl: './settle-payment.component.css'
})
export class SettlePaymentComponent {

}
