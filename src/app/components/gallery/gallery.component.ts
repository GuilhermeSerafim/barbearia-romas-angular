import { Component, OnInit } from '@angular/core';
import { CardGaleriaComponent } from "../card-galeria/card-galeria.component";
import { GaleriaService } from '../../services/galeria.service';
import { GaleriaItem } from '../../interfaces/galeria-item';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CardGaleriaComponent, MatProgressSpinnerModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {

  carregando: boolean = true;

  constructor(private galeria: GaleriaService) { }

  itens: GaleriaItem[] = [];

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.galeria.getAll().subscribe({
      next: data => {
        this.itens = data;
        this.carregando = false;
      },
      error: err => {
        console.error(err);
        this.carregando = false;
      }
    });
  }
}
