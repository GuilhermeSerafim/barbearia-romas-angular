import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgendamentoItem } from '../interfaces/agendamento-item';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {
  private apiUrl = 'http://localhost:5010/agendamentos';
  constructor(private http: HttpClient) { }

  getAll(): Observable<AgendamentoItem[]> {
    return this.http.get<AgendamentoItem[]>(this.apiUrl);
  }

  delete(id: string | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  create(item: Omit<AgendamentoItem, 'id'>) {
    return this.http.post<AgendamentoItem>(this.apiUrl, item);
  }

  update(item: AgendamentoItem): Observable<AgendamentoItem> {
    return this.http.put<AgendamentoItem>(`${this.apiUrl}/${item.id}`, item);
  }
}
