import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-galeria-adm',
  standalone: true,
  imports: [],
  templateUrl: './card-galeria-adm.component.html',
  styleUrl: './card-galeria-adm.component.css'
})
export class CardGaleriaAdmComponent {
  @Input({ alias: 'path', required: true }) pathimg: string = "";
  @Input({ alias: 'alt' }) altImg: string = "";
  @Input({ alias: 'comment', required: true }) comment: string = "";
  @Input({ alias: 'name', required: true }) name: string = "";
  excluirItemGaleria() {
    throw new Error('Method not implemented.');
  }
  editarItemGaleria() {
    throw new Error('Method not implemented.');
  }
}
