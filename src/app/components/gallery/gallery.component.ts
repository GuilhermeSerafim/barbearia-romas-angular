import { Component, OnInit } from '@angular/core';
import { CardGaleriaComponent } from "../card-galeria/card-galeria.component";
import { GaleriaItem, GaleriaService } from '../../services/galeria.service';

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
    this.galeria.getAll().subscribe(data => this.itens = data);
  }
}
