import { Component, Input } from '@angular/core';
import { CalcularTotalPipe } from '../../../pipes/calcular-total.pipe';
import { CalcularIvaPipe } from '../../../pipes/calcular-iva.pipe';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../../service/carrito.service';

@Component({
  selector: 'app-resumen-compra',
  standalone: true,
  imports: [CommonModule, CalcularIvaPipe, CalcularTotalPipe],
  templateUrl: './resumen-compra.component.html',
  styleUrl: './resumen-compra.component.css'
})
export class ResumenCompraComponent {
  @Input() items: any[] = [];
  ivaPorcentaje: number = 15;

  constructor(private carritoService: CarritoService) {}

  calcularSubtotal(): number {
    return this.items.reduce((total, item) => 
      total + (item.precio * (item.cantidad || 1)), 0);
  }

  finalizarCompra(): void {
    this.carritoService.limpiarCarrito();
    alert('Compra realizada con éxito');
  }

  cancelarCompra(): void {
    if(confirm('¿Estás seguro de cancelar la compra y vaciar el carrito?')) {
      this.carritoService.limpiarCarrito();
    }
  }
}
