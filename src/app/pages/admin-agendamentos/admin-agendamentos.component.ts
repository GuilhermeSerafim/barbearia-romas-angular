import { Component } from '@angular/core';
import { NavbarAdmComponent } from "../../components/adm/navbar-adm/navbar-adm.component";
import { FooterAdmComponent } from "../../components/adm/footer-adm/footer-adm.component";

@Component({
  selector: 'app-admin-agendamentos',
  standalone: true,
  imports: [NavbarAdmComponent, FooterAdmComponent],
  templateUrl: './admin-agendamentos.component.html',
  styleUrl: './admin-agendamentos.component.css'
})
export class AdminAgendamentosComponent {

}
