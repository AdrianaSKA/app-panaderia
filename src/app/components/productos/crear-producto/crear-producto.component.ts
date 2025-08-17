import { Component } from '@angular/core';
import { ProductoService } from '../../../service/producto.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {

  enviado: boolean = false;
  rolUsuario: string = '';

  productoForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', [Validators.required, Validators.minLength(10)]],
    precio: [0, [Validators.required, Validators.min(0.01)]],
    categoria: ['', Validators.required],
    imagenUrl: ['', [Validators.required, Validators.pattern(/https?:\/\/.+/)]],
    nuevo: [false]
  });

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  const usuario = localStorage.getItem('usuario');
  if (usuario) {
    this.rolUsuario = JSON.parse(usuario).rol;
  }
    if (this.rolUsuario !== 'ADMIN') {
    this.productoForm.disable(); 
  }
}

  guardarProducto = () => {
    if (this.productoForm.valid) {
      this.enviado = true;

      const nuevoProducto = this.productoForm.value;

      this.productoService.crearProducto(nuevoProducto).subscribe({
        next: () => {
          console.log('Producto creado con éxito', nuevoProducto);
          alert('Producto creado con éxito');
          this.productoForm.reset();
          this.router.navigateByUrl('/productos');
        },
        error: (error) => {
          console.error('Error al crear producto:', error);
          alert('Ocurrió un error al crear el producto');
        }
      });
    } else {
      this.productoForm.markAllAsTouched();
    }
  }

  campoVacios = () => {
    return !this.enviado && Object.values(this.productoForm.value).some(valor =>
      typeof valor === 'string' ? valor.trim() !== '' : valor !== null && valor !== undefined
    );
  }
}