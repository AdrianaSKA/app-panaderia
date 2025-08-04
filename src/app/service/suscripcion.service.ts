import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

    private API_SUSCRIPCION = 'https://app-panaderia-a464d-default-rtdb.firebaseio.com'; 

    constructor(private http: HttpClient) {}

  crearSuscripcion(suscripcion: any): Observable<any> {
    return this.http.post(`${this.API_SUSCRIPCION}/suscripciones.json`, suscripcion);
    
  }
}
