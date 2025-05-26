import { Component, OnInit } from '@angular/core';
import { CardGaleriaComponent } from "../card-galeria/card-galeria.component";
import { GaleriaService } from '../../services/galeria.service';
import { GaleriaItem } from '../../interfaces/galeria-item';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CardGaleriaComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  constructor(private galeria: GaleriaService) { }

  itens: GaleriaItem[] = [];

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.galeria.getAll().subscribe(data => {
      console.log( this.itens = data)
      return data
    });
  }
}
