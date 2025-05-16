import { Component, inject, OnInit } from '@angular/core';
import { FooterAdmComponent } from "../../components/footer-adm/footer-adm.component";
import { NavbarAdmComponent } from "../../components/navbar-adm/navbar-adm.component";
import { CardGaleriaAdmComponent } from "../../components/card-galeria-adm/card-galeria-adm.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GaleriaService } from '../../services/galeria.service';
import { AddGaleriaDialogComponent } from '../../components/add-galeria-dialog/add-galeria-dialog.component';
import { GaleriaItem } from '../../interfaces/galeria-item';
import { AlterGaleriaDialogComponent } from '../../components/alter-galeria-dialog/alter-galeria-dialog.component';

@Component({
  selector: 'app-admin-galeria',
  standalone: true,
  imports: [FooterAdmComponent, NavbarAdmComponent, CardGaleriaAdmComponent, MatDialogModule],
  templateUrl: './admin-galeria.component.html',
  styleUrl: './admin-galeria.component.css'
})
export class AdminGaleriaComponent implements OnInit {

  constructor(private galeria: GaleriaService) { }

  itens: GaleriaItem[] = [];

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.galeria.getAll().subscribe(data => this.itens = data);
  }

  remove(id: string) {
    this.galeria.delete(id)
      .subscribe(() => this.load());
  }

  readonly dialog = inject(MatDialog);

  openDialog() {
    // 1) Abre o diálogo
    const ref = this.dialog.open(AddGaleriaDialogComponent, {
      width: '400px'
    });

    // 2) Quando ele fecha, verifica se retornou `true` e recarrega
    ref.afterClosed().subscribe(didCreate => {
      if (didCreate) {
        this.load();
      }
    });
  }

  alter(itemGaleria: GaleriaItem) {
    const ref = this.dialog.open(AlterGaleriaDialogComponent, {
      width: '800px',
      data: itemGaleria
    });

    // Um Observable HTTP em Angular é lazy (“frio”): nenhuma chamada ao get(), post(), etc., acontece até que você dê um subscribe(). É o subscribe que dispara a requisição de fato.
    ref.afterClosed().subscribe((itemGaleria: GaleriaItem) => this.galeria.update(itemGaleria).subscribe(() => this.load()));
  }
}
