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
    categoria: 'panes',
    imagenUrl: '',
    nuevo: false
  };

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id'];})
    this.productoService.getProductoById(this.id).subscribe(producto =>{ 
      
      error: (err:any) => {
        console.error('Error al cargar producto:', err);
        alert('Ocurrió un error al cargar el producto');
      }
    });
  }

  actualizarProducto(formulario: any): void {
    if (formulario.valid) {
      const productoActualizado={...formulario.value, id: this.id}
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

}
