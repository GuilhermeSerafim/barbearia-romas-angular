import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GaleriaItem } from '../interfaces/galeria-item';


@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  private apiUrl = 'http://localhost:5010/galeria';
  constructor(private http: HttpClient) { }

  getAll(): Observable<GaleriaItem[]> {
    return this.http.get<GaleriaItem[]>(this.apiUrl);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  create(item: Omit<GaleriaItem, 'id'>) {
    return this.http.post<GaleriaItem>(this.apiUrl, item);
  }

  update(item: GaleriaItem): Observable<GaleriaItem> {
    return this.http.put<GaleriaItem>(`${this.apiUrl}/${item.id}`, item);
  }
}
