import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterAdmComponent } from '../../components/adm/footer-adm/footer-adm.component';
import { NavbarAdmComponent } from '../../components/adm/navbar-adm/navbar-adm.component';

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
