import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-galeria',
  standalone: true,
  imports: [],
  templateUrl: './card-galeria.component.html',
  styleUrl: './card-galeria.component.css'
})
export class CardGaleriaComponent {
  @Input() pathimg: string = '';
  @Input() comentario: string = '';
  @Input() nome: string = '';
}
