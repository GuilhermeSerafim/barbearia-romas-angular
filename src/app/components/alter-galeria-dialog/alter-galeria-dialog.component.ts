import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GaleriaService } from '../../services/galeria.service';
import { AddGaleriaDialogComponent } from '../add-galeria-dialog/add-galeria-dialog.component';
import { GaleriaItem } from '../../interfaces/galeria-item';

@Component({
  selector: 'app-alter-galeria-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogActions, MatDialogClose, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './alter-galeria-dialog.component.html',
  styleUrl: './alter-galeria-dialog.component.css'
})
export class AlterGaleriaDialogComponent {
  constructor(
    private galeria: GaleriaService,
    private dialogRef: MatDialogRef<AddGaleriaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GaleriaItem
  ) { }


  ngOnInit(): void {
    this.itemGaleria = { ...this.data };
  }

  itemGaleria: GaleriaItem = {
    id: undefined,
    img: undefined,
    comentario: undefined,
    nome: undefined
  };

  todosOsCamposEstaoPreenchidos = () => !this.itemGaleria.img || !this.itemGaleria.nome || !this.itemGaleria.comentario;


  alterarItemGaleria = () => this.dialogRef.close(this.itemGaleria);
}
