import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AgendamentoItem } from '../../interfaces/agendamento-item';

@Component({
  selector: 'app-item-agendamento',
  standalone: true,
  imports: [],
  templateUrl: './item-agendamento.component.html',
  styleUrl: './item-agendamento.component.css'
})
export class ItemAgendamentoComponent {
  // @Input({ required: true, alias: "idItemGaleria" }) idItemAgendamento: string | undefined;
  @Input({ required: true, alias: "nomeCliente" }) nomeCliente: string | undefined;
  @Input({ required: true, alias: "telefone" }) telefone: string | undefined;
  @Input({ required: true, alias: "servico" }) servico: string | undefined;
  @Input({ required: true, alias: "barbeiro" }) barbeiro: string | undefined;
  @Input({ required: true, alias: "data" }) data: string | undefined;

  @Output() itemAgendamentoEmitt = new EventEmitter<AgendamentoItem>();

  // emitirAgendamentoASerAlterado() {
  //   this.itemAgendamentoEmitt.emit({ id: this.idItemAgendamento, cliente: this.nomeCliente, telefone: this.telefone, servico: this.servico, barbeiro: this.barbeiro, data: this.data });
  // }
  
  // emitirAgendamentoASerExcluido() {
  //   this.itemAgendamentoEmitt.emit({ id: this.idItemAgendamento, cliente: this.nomeCliente, telefone: this.telefone, servico: this.servico, barbeiro: this.barbeiro, data: this.data });
  // }

}
