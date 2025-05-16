import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-galeria',
  standalone: true,
  imports: [],
  templateUrl: './card-galeria.component.html',
  styleUrl: './card-galeria.component.css'
})
export class CardGaleriaComponent {
  @Input({ required: true }) pathimg: string | undefined;
  @Input({ required: true }) comentario: string | undefined;
  @Input({ required: true }) nome: string | undefined;
}
