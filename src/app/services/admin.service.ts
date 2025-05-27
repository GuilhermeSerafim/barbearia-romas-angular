import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'https://barbearia-romas-api.onrender.com/admin';
  constructor(private http: HttpClient) { }

  login(user: string, password: string): Observable<boolean> {
    return this.http
      .post<{ authenticated: boolean }>(this.apiUrl, { user, password })
      // Transforma a resposta num boolean (true ou false) usando map.
      .pipe(map(resp => resp.authenticated));
  }
}
