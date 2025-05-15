import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, take } from 'rxjs';

export interface GaleriaItem {
  id: string,
  img: string,
  comentario: string,
  nome: string,
}

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  private apiUrl = 'http://localhost:3000/galeria';
  constructor(private http: HttpClient) { }

  // Um Observable é uma fonte de valores assíncronos que só emite dados quando você se inscreve, permitindo tratar e combinar múltiplos eventos ao longo do tempo (+ poderoso que a Promisse).
  getAll(): Observable<GaleriaItem[]> {
    return this.http.get<GaleriaItem[]>(this.apiUrl);
  }

  // O json-server converte meus id para string...
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  // O Omit<T, K> é um tipo utilitário do TypeScript (e portanto usado em projetos Angular/TS) que te 
  // Permite criar um novo tipo a partir de outro, removendo uma ou mais propriedades.
  // create() {
    
  // }

}
