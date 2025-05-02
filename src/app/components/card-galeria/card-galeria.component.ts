import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-galeria',
  standalone: true,
  imports: [],
  templateUrl: './card-galeria.component.html',
  styleUrl: './card-galeria.component.css'
})
export class CardGaleriaComponent {
  @Input({ required: true, alias: "pathImg" }) path: string = '';
  @Input({ alias: "altImg" }) alt: string = '';
  @Input({ required: true, alias: "valorServico"}) valorServico: number = 0;
  @Input({ required: true, alias: "tituloServico"}) tituloServico: string = '';
}
