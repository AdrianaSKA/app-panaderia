import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
private API_SPRING = "http://localhost:8080/productos"

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(`${this.API_SPRING}`)
  }

  getProductoById(id: string): Observable<any> {
    return this.http.get(`${this.API_SPRING}/${id}`);
  }

  crearProducto(producto: any): Observable<any> {
    return this.http.post(`${this.API_SPRING}/guardar`, producto)
  }

  actualizarProducto(id: string, producto: any): Observable<any> {
    return this.http.put(`${this.API_SPRING}/editar/${id}`, producto);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(`${this.API_SPRING}/eliminar/${id}`);
  }
}
