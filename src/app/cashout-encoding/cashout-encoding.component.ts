import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-cashout-encoding',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent],
  templateUrl: './cashout-encoding.component.html',
  styleUrl: './cashout-encoding.component.css'
})
export class CashoutEncodingComponent {

}
