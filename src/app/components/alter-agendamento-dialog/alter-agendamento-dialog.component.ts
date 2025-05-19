import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AgendamentoItem } from '../../interfaces/agendamento-item';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-alter-agendamento-dialog',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  imports: [MatIconModule, MatDatepickerModule, MatDialogTitle, MatDialogActions, MatDialogClose, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './alter-agendamento-dialog.component.html',
  styleUrl: './alter-agendamento-dialog.component.css'
})
export class AlterAgendamentoDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<AlterAgendamentoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AgendamentoItem
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

  ngOnInit(): void {
    this.itemAgendamento = { ...this.data };
  }

  alterarItemAgendamento = () => this.dialogRef.close(this.itemAgendamento);
}
