import { Component } from '@angular/core';
import { CardGaleriaComponent } from "../card-galeria/card-galeria.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CardGaleriaComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
