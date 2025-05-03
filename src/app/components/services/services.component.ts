import { Component } from '@angular/core';
import { CardServiceComponent } from "../card-service/card-service.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
