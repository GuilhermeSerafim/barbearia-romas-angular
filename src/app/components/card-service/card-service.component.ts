import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css'
})
export class CardServiceComponent {
  @Input({ required: true, alias: "pathImg" }) path: string = '';
  @Input({ alias: "altImg" }) alt: string = '';
  @Input({ required: true, alias: "valorServico" }) valorServico: number = 0;
  @Input({ required: true, alias: "tituloServico" }) tituloServico: string = '';
}
