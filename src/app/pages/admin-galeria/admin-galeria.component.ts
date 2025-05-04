import { Component } from '@angular/core';
import { FooterAdmComponent } from "../../components/adm/footer-adm/footer-adm.component";
import { NavbarAdmComponent } from "../../components/adm/navbar-adm/navbar-adm.component";
import { CardGaleriaAdmComponent } from "../../components/card-galeria-adm/card-galeria-adm.component";

@Component({
  selector: 'app-admin-galeria',
  standalone: true,
  imports: [FooterAdmComponent, NavbarAdmComponent, CardGaleriaAdmComponent],
  templateUrl: './admin-galeria.component.html',
  styleUrl: './admin-galeria.component.css'
})
export class AdminGaleriaComponent {

}
