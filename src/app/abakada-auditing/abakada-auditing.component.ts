import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-abakada-auditing',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent],
  templateUrl: './abakada-auditing.component.html',
  styleUrl: './abakada-auditing.component.css'
})
export class AbakadaAuditingComponent {
}
