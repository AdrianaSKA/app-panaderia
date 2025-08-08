import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private API_URL = 'https://app-panaderia-a464d-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.API_URL}/usuarios.json`);
  }

  getUsuarioById(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/usuarios/${id}.json`);
  }

  crearUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.API_URL}/usuarios.json`, usuario);
  }

}
