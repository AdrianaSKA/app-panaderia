import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  private API_SPRING = "http://localhost:8080/suscripciones"

  constructor(private http: HttpClient) { }

  crearSuscripcion(suscripcion: any): Observable<any> {
    return this.http.post(`${this.API_SPRING}/guardar`, suscripcion)
  }
}
