import { Component } from '@angular/core';
import { ProductoService } from '../../../service/producto.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  producto: any = {
    nombre: '',
    descripcion: '',
    precio: 0,
    categoria: 'panes',
    imagenUrl: '',
    nuevo: false
  };

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

  crearProducto(formulario: any): void {
    if (formulario.valid) {
      this.productoService.crearProducto(this.producto).subscribe({
        next: () => {
          this.router.navigate(['/productos']);
        },
        error: (err) => {
          console.error('Error al crear producto:', err);
          alert('Ocurrió un error al crear el producto');
        }
      });
    }
  }
}
