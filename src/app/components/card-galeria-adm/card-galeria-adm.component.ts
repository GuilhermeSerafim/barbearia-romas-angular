import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GaleriaItem } from '../../interfaces/galeria-item';

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
  @Output() idClientEmmit = new EventEmitter<string>();
  @Output() objClientEmmit = new EventEmitter<GaleriaItem>();
  
  emitirItemASerExcluido() {
    this.idClientEmmit.emit(this.idItemGaleria);
  }

  emitirItemGaleriaASerAlterado() {
    this.objClientEmmit.emit({ id: this.idItemGaleria, comentario: this.comment, img: this.pathimg, nome: this.name });
  }

}
