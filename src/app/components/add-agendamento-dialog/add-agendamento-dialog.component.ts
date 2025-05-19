import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AgendamentosService } from '../../services/agendamentos.service';
import { AgendamentoItem } from '../../interfaces/agendamento-item';

@Component({
  selector: 'app-add-agendamento-dialog',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  imports: [MatIconModule, MatDatepickerModule, MatDialogTitle, MatDialogActions, MatDialogClose, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './add-agendamento-dialog.component.html',
  styleUrl: './add-agendamento-dialog.component.css'
})
export class AddAgendamentoDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<AddAgendamentoDialogComponent>,
    private agendamentosService: AgendamentosService
  ) { }

  itemAgendamento: AgendamentoItem = {
    barbeiro: undefined,
    cliente: undefined,
    data: undefined,
    id: undefined,
    servico: undefined,
    telefone: undefined,
    horario: undefined
  }

  // Campos obrigatórios
  todosOsCamposEstaoPreenchidos = () =>
    !this.itemAgendamento.cliente ||
    !this.itemAgendamento.data ||
    !this.itemAgendamento.servico ||
    !this.itemAgendamento.horario
    ;

  adicionarItemAgendamento() {
    this.agendamentosService.create(this.itemAgendamento)
      .subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: err => {
          console.error('Falaha ao criar item de galeria', err);
        }
      });
  }
}
