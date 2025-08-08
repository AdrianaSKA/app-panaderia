import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoSubject = new BehaviorSubject<any[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  constructor() {
    this.cargarDesdeLocalStorage();
  }

  agregarProducto(producto: any): void {
    const current = this.carritoSubject.value;
    const itemExistente = current.find(item => item.id === producto.id);

    if (itemExistente) {
      itemExistente.cantidad = (itemExistente.cantidad || 1) + 1;
    } else {
      current.push({ ...producto, cantidad: 1 });
    }

    this.carritoSubject.next([...current]);
    this.guardarEnLocalStorage();
  }

  eliminarProducto(id: string): void {
    const current = this.carritoSubject.value.filter(item => item.id !== id);
    this.carritoSubject.next([...current]);
    this.guardarEnLocalStorage();
  }

  limpiarCarrito(): void {
    this.carritoSubject.next([]);
    this.guardarEnLocalStorage();
  }

  private guardarEnLocalStorage(): void {
    localStorage.setItem('carrito', JSON.stringify(this.carritoSubject.value));
  }

  private cargarDesdeLocalStorage(): void {
    const carrito = localStorage.getItem('carrito');
    if (carrito) {
      this.carritoSubject.next(JSON.parse(carrito));
    }
  }
}
