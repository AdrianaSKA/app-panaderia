import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private API_PRODUCTOS = 'https://app-panaderia-a464d-default-rtdb.firebaseio.com'; 

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(`${this.API_PRODUCTOS}/productos.json`);
  }

  getProductoById(id: string): Observable<any> {
    return this.http.get(`${this.API_PRODUCTOS}/${id}.json`);
  }

  crearProducto(producto: any): Observable<any> {
    return this.http.post(`${this.API_PRODUCTOS}/productos.json`, producto);
  }

  actualizarProducto(id: string, producto: any): Observable<any> {
    return this.http.put(`${this.API_PRODUCTOS}/productos/${id}.json`, producto);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(`${this.API_PRODUCTOS}/productos/${id}.json`);
  }
}
