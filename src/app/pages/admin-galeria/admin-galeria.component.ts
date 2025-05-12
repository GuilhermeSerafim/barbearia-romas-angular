import { Component, inject, OnInit } from '@angular/core';
import { FooterAdmComponent } from "../../components/adm/footer-adm/footer-adm.component";
import { NavbarAdmComponent } from "../../components/adm/navbar-adm/navbar-adm.component";
import { CardGaleriaAdmComponent } from "../../components/card-galeria-adm/card-galeria-adm.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GaleriaItem, GaleriaService } from '../../services/galeria.service';

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

  remove(id: number) {
    console.log(id);
    this.galeria.delete(id)
      .subscribe(() => this.load());
  }
}
