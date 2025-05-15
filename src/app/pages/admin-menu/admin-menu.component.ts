import { Component } from '@angular/core';
import { FooterAdmComponent } from "../../components/footer-adm/footer-adm.component";
import { NavbarAdmComponent } from "../../components/navbar-adm/navbar-adm.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  standalone: true,
  imports: [FooterAdmComponent, NavbarAdmComponent],
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.css'
})
export class AdminMenuComponent {
  constructor(private router: Router) { }
  entraGaleria() {
    this.router.navigate(['/adm/galeria']);
  }
  entrarAgendamentos() {
    this.router.navigate(['/adm/agendamentos']);
  }

}
