import { Component } from '@angular/core';
import { ProductoService } from '../../../service/producto.service';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../../service/carrito.service';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  productos: any[] = [];
  rolUsuario: string = '';

  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService 
  ) { }


ngOnInit(): void {
  const usuario = localStorage.getItem('usuario');
  if (usuario) {
    this.rolUsuario = JSON.parse(usuario).rol;
  }

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


  comprarProducto(producto: any): void {
    this.carritoService.agregarProducto(producto);
    alert(`${producto.nombre} se ha añadido al carrito`);
  }

}
