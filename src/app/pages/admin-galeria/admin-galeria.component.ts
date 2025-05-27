import { Component, inject, OnInit } from '@angular/core';
import { CardGaleriaAdmComponent } from "../../components/card-galeria-adm/card-galeria-adm.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GaleriaService } from '../../services/galeria.service';
import { AddGaleriaDialogComponent } from '../../components/add-galeria-dialog/add-galeria-dialog.component';
import { GaleriaItem } from '../../interfaces/galeria-item';
import { AlterGaleriaDialogComponent } from '../../components/alter-galeria-dialog/alter-galeria-dialog.component';
import { FooterAdmComponent } from '../../components/adm/footer-adm/footer-adm.component';
import { NavbarAdmComponent } from '../../components/adm/navbar-adm/navbar-adm.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-admin-galeria',
  standalone: true,
  imports: [FooterAdmComponent, NavbarAdmComponent, CardGaleriaAdmComponent, MatDialogModule, MatProgressSpinnerModule],
  templateUrl: './admin-galeria.component.html',
  styleUrl: './admin-galeria.component.css'
})
export class AdminGaleriaComponent implements OnInit {
  carregando: boolean = true;

  constructor(private galeria: GaleriaService) { }

  itens: GaleriaItem[] = [];

  ngOnInit(): void {
    this.load();
  }

  remove(id: string) {
    this.galeria.delete(id)
      .subscribe(() =>
        this.load() //  recarrega os dados na tela
      );
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

  readonly dialog = inject(MatDialog);

  addDialog() {
    const ref = this.dialog.open(AddGaleriaDialogComponent, {
      width: '800px'
    });

    ref.afterClosed().subscribe(didCreate => {
      if (didCreate) {
        this.load();
      }
    });
  }

  alter(itemGaleriaParam: GaleriaItem) {
    const ref = this.dialog.open(AlterGaleriaDialogComponent, {
      width: '800px',
      data: itemGaleriaParam
    });

    ref.afterClosed().subscribe((updatedItem: GaleriaItem | undefined) => {
      if (updatedItem?.id) {
        this.galeria.update(updatedItem)
          .subscribe(() => this.load());
      }
    });
  }
}
