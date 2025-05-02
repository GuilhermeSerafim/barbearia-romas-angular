import { Component } from '@angular/core';
import { CardGaleriaComponent } from "../card-galeria/card-galeria.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardGaleriaComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
