import { Component } from '@angular/core';
import { ListaProductosComponent } from "../../components/carrito/lista-productos/lista-productos.component";
import { ResumenCompraComponent } from "../../components/carrito/resumen-compra/resumen-compra.component";
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [ListaProductosComponent, ResumenCompraComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  carrito: any[] = [];

  constructor(private carritoService: CarritoService) {
    this.carritoService.carrito$.subscribe(data => {
      this.carrito = data;
    });
  }
}
