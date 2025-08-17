import { Component } from '@angular/core';
import { ProductoService } from '../../../service/producto.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {

  id: string = '';
  producto: any = {
    nombre: '',
    descripcion: '',
    precio: 0,
    categoria: '',
    imagenUrl: '',
    nuevo: false
  };

  rolUsuario: string = '';

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

ngOnInit(): void {
  const usuario = localStorage.getItem('usuario');
  if (usuario) {
    this.rolUsuario = JSON.parse(usuario).rol;
  }


  this.route.params.subscribe(params => {
    this.id = params['id'];
    this.productoService.getProductoById(this.id).subscribe({
      next: (producto) => {
        this.producto = producto;
      },
      error: (err) => {
        console.error('Error al cargar producto:', err);
        alert('Ocurrió un error al cargar el producto');
      }
    });
  });
}


  actualizarProducto(formulario: any): void {
      const productoActualizado = { ...formulario.value, id: this.id }
      this.productoService.actualizarProducto(this.id, productoActualizado).subscribe({
        next: () => {
          this.router.navigate(['/productos']);
        },
        error: (err) => {
          console.error('Error al actualizar producto:', err);
          alert('Ocurrió un error al actualizar el producto');
        }
      });
  }

}
