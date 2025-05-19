import { Component, OnInit } from '@angular/core';
import { AgendamentosService } from '../../services/agendamentos.service';
import { AgendamentoItem } from '../../interfaces/agendamento-item';
import { NavbarAdmComponent } from '../../components/adm/navbar-adm/navbar-adm.component';
import { FooterAdmComponent } from '../../components/adm/footer-adm/footer-adm.component';

@Component({
  selector: 'app-admin-agendamentos',
  standalone: true,
  imports: [NavbarAdmComponent, FooterAdmComponent],
  templateUrl: './admin-agendamentos.component.html',
  styleUrl: './admin-agendamentos.component.css'
})
export class AdminAgendamentosComponent implements OnInit {
  teste() {
    console.log(this.itensAgendamentos)
  }
  constructor(private agendamentoService: AgendamentosService) { }

  itensAgendamentos: AgendamentoItem[] = [];

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.agendamentoService.getAll().subscribe(data => this.itensAgendamentos = data);
  }

}
