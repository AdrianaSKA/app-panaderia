import { Component } from '@angular/core';
import { ProductoService } from '../../../service/producto.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  productos: any[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
    });
  }

  eliminarProducto(id: string): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoService.eliminarProducto(id).subscribe(() => {
        this.productos = this.productos.filter(p => p.id !== id);
      });
    }
  }

}
