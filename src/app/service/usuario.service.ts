import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private API_SPRING = "http://localhost:8080/usuarios"

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.API_SPRING}`)
  }

  getUsuarioById(id: string): Observable<any> {
    return this.http.get(`${this.API_SPRING}/${id}`);
  }

  crearUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.API_SPRING}/guardar`, usuario)
  }


}
