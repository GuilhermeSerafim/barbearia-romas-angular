import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { GaleriaService } from '../../services/galeria.service';

@Component({
  selector: 'app-add-galeria-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogActions, MatDialogClose, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './add-galeria-dialog.component.html',
  styleUrl: './add-galeria-dialog.component.css'
})
export class AddGaleriaDialogComponent {

  constructor(
    private galeria: GaleriaService,
    private dialogRef: MatDialogRef<AddGaleriaDialogComponent>
  ) { }
  caminhoImagem: string = "";
  comentario: string = "";
  nome: string = "";


  todosOsCamposEstaoPreenchidos = () => !this.caminhoImagem || !this.nome || !this.comentario;

  // adicionarItemGaleria() {
  //   // 1) Dispara a requisição POST para criar um novo item na galeria
  //   this.galeria.create({
  //     img: this.caminhoImagem,
  //     comentario: this.comentario,
  //     nome: this.nome
  //   })
  //     // 2) Inscreve-se (subscribe) no Observable retornado pelo HttpClient
  //     .subscribe({
  //       next: () => {
  //         // 3a) Quando o servidor confirma o POST com sucesso,
  //         //     fecha o diálogo e envia `true` para o componente pai
  //         this.dialogRef.close(true);
  //       },
  //       error: err => {
  //         // 3b) Se der erro na requisição, cai aqui:
  //         console.error('Falha ao criar item de galeria', err);
  //         // Opcional: você pode disparar um Snackbar ou outro feedback visual
  //       }
  //     });
  // }
}
