import { Component, inject, OnInit } from '@angular/core';
import { AgendamentosService } from '../../services/agendamentos.service';
import { AgendamentoItem } from '../../interfaces/agendamento-item';
import { NavbarAdmComponent } from '../../components/adm/navbar-adm/navbar-adm.component';
import { FooterAdmComponent } from '../../components/adm/footer-adm/footer-adm.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AlterAgendamentoDialogComponent } from '../../components/alter-agendamento-dialog/alter-agendamento-dialog.component';
import { CommonModule } from '@angular/common';
import { AddAgendamentoDialogComponent } from '../../components/add-agendamento-dialog/add-agendamento-dialog.component';
import { PhonePipe } from '../../pipes/phone.pipe';
import { DashIfEmptyPipe } from '../../pipes/dash-if-empty.pipe';

@Component({
  selector: 'app-admin-agendamentos',
  standalone: true,
  imports: [NavbarAdmComponent, FooterAdmComponent, MatDialogModule, CommonModule, PhonePipe, DashIfEmptyPipe],
  templateUrl: './admin-agendamentos.component.html',
  styleUrl: './admin-agendamentos.component.css'
})
export class AdminAgendamentosComponent implements OnInit {

  constructor(private agendamentoService: AgendamentosService) { }

  readonly dialog = inject(MatDialog);

  itensAgendamentos: AgendamentoItem[] = [];

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.agendamentoService.getAll().subscribe(data => this.itensAgendamentos = data);
  }

  deletarAgendamento(id: string | undefined) {
    this.agendamentoService.delete(id)
      .subscribe(() =>
        this.load() //  recarrega os dados na tela
      );
  }

  alterarAgendamento(itemAgendamento: AgendamentoItem) {
    const ref = this.dialog.open(AlterAgendamentoDialogComponent, {
      width: '500px',
      data: itemAgendamento // Inject
    });

    ref.afterClosed().subscribe((itemAgendamento: AgendamentoItem | undefined) => {
      if (itemAgendamento?.id) {
        this.agendamentoService.update(itemAgendamento).subscribe(() => this.load());
      }
    });
  }

  adicionarItemAgendamento() {
    const ref = this.dialog.open(AddAgendamentoDialogComponent, {
      width: '800px'
    });

    ref.afterClosed().subscribe(didCreate => {
      if (didCreate) {
        this.load();
      }
    });
  }
}
