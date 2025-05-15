import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-galeria-adm',
  standalone: true,
  imports: [],
  templateUrl: './card-galeria-adm.component.html',
  styleUrl: './card-galeria-adm.component.css'
})
export class CardGaleriaAdmComponent {
  @Input({ alias: 'alt' }) altImg: string = "";
  @Input({ alias: 'index', required: true }) index: number = 0;
  @Input({ alias: 'path', required: true }) pathimg: string | undefined;
  @Input({ alias: 'comment', required: true }) comment: string | undefined;
  @Input({ alias: 'name', required: true }) name: string | undefined;
  @Input({ alias: 'idItemGaleria', required: true }) idItemGaleria: string | undefined;
  @Output() deleteClientEmmit = new EventEmitter<string>();
  emitirItemASerExcluido() {
    this.deleteClientEmmit.emit(this.idItemGaleria);
  }
  editarItemGaleria() {
    throw new Error('Method not implemented.');
  }
}
