import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/usuarios';



  login(usuario: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { usuario, password });
  }


  sesionIniciada(): boolean {
    return localStorage.getItem('usuario') !== null;
  }

  logout(): void {
    localStorage.removeItem('usuario');
  }
}

