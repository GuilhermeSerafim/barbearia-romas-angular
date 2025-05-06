  import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    @Input({ alias: 'index', required: true }) index: number = 0;
    @Input() teste: string = "";
    @Output() deleteClientEmmit = new EventEmitter<number>();
    emitirItemASerExcluido() {
      this.deleteClientEmmit.emit(this.index);
    }
    editarItemGaleria() {
      throw new Error('Method not implemented.');
    }
  }
