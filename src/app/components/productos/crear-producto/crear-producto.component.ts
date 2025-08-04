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
  id: string = '';
  nombre: string = '';
  descripcion: string = '';
  precio: number = 0;
  categoria: string = '';
  imagenUrl: string = '';
  nuevo: boolean = false;

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

  crearProducto(): void {
    const errores: string[] = [];

    if (!this.nombre || this.nombre.trim().length < 3) {
      errores.push('El nombre debe tener al menos 3 caracteres.');
    }

    if (!this.descripcion || this.descripcion.trim().length < 10) {
      errores.push('La descripción debe tener al menos 10 caracteres.');
    }

    if (!this.precio || this.precio <= 0) {
      errores.push('El precio debe ser mayor que 0.');
    }

    if (!this.categoria || this.categoria.trim().length < 3) {
      errores.push('La categoría debe tener al menos 3 caracteres.');
    }

    if (!this.imagenUrl || !this.validarUrl(this.imagenUrl)) {
      errores.push('La URL de la imagen no es válida.');
    }

    if (errores.length > 0) {
      alert(errores.join('\n'));
      return;
    }

    const nuevoProducto = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
      categoria: this.categoria,
      imagenUrl: this.imagenUrl,
      nuevo: this.nuevo
    };

    this.productoService.crearProducto(nuevoProducto).subscribe({
      next: () => {
        alert('Producto creado con éxito');
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        console.error('Error al crear producto:', err);
        alert('Ocurrió un error al crear el producto');
      }
    });
  }

  private validarUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }
}
