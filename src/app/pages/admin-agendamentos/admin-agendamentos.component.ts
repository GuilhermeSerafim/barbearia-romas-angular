import { Component } from '@angular/core';
import { NavbarAdmComponent } from "../../components/navbar-adm/navbar-adm.component";
import { FooterAdmComponent } from "../../components/footer-adm/footer-adm.component";

@Component({
  selector: 'app-admin-agendamentos',
  standalone: true,
  imports: [NavbarAdmComponent, FooterAdmComponent],
  templateUrl: './admin-agendamentos.component.html',
  styleUrl: './admin-agendamentos.component.css'
})
export class AdminAgendamentosComponent {

}
