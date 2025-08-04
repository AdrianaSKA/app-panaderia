import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SuscripcionService } from '../../../service/suscripcion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-sus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-sus.component.html',
  styleUrl: './form-sus.component.css'
})
export class FormSusComponent {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  password: string = '';
  confirmarPassword: string = '';
  acepta: boolean = false;

  constructor(
    private suscripcionService: SuscripcionService,
    private router: Router
  ) { }

  enviarSolicitud(formulario: NgForm): void {
    const errores: string[] = [];

    if (!this.nombre || this.nombre.trim().length < 3) {
      errores.push('El nombre debe tener al menos 3 caracteres.');
    }

    if (!this.email || !this.validarEmail(this.email)) {
      errores.push('El correo electrónico no es válido.');
    }

    if (this.telefono && !this.validarTelefono(this.telefono)) {
      errores.push('El teléfono no tiene un formato válido.');
    }

    if (!this.password || this.password.length < 6) {
      errores.push('La contraseña debe tener al menos 6 caracteres.');
    }

    if (this.password !== this.confirmarPassword) {
      errores.push('Las contraseñas no coinciden.');
    }

    if (!this.acepta) {
      errores.push('Debes aceptar los términos y condiciones.');
    }

    if (errores.length > 0) {
      alert(errores.join('\n'));
      return;
    }

    const nuevaSuscripcion = {
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono,
      acepta: this.acepta,
      password: this.password
    };

    this.suscripcionService.crearSuscripcion(nuevaSuscripcion).subscribe({
      next: () => {
        alert('¡Gracias por unirte!');
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error('Error al enviar la solicitud:', err);
        alert('Hubo un error al enviar la solicitud.');
      }
    });
  }

  private validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  private validarTelefono(telefono: string): boolean {
    const regex = /^[+0-9\s()-]{7,20}$/;
    return regex.test(telefono);
  }
}
