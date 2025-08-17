import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { SuscripcionService } from '../../../service/suscripcion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-sus',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-sus.component.html',
  styleUrl: './form-sus.component.css'
})
export class FormSusComponent {
  suscripcionForm: FormGroup;
  enviado: boolean = false;

  constructor(
    private fb: FormBuilder,
    private suscripcionService: SuscripcionService,
    private router: Router
  ) {
    this.suscripcionForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', Validators.required],
      acepta: [false, Validators.requiredTrue]
    }, { validators: this.passwordsCoinciden });
  }

  private passwordsCoinciden(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirmarPassword')?.value;
    return pass === confirm ? null : { passwordsNoCoinciden: true };
  }

  enviarSolicitud() {
    if (this.suscripcionForm.valid) {
      this.enviado = true;

      const nuevaSuscripcion = {
        nombre: this.suscripcionForm.value.nombre,
        email: this.suscripcionForm.value.email,
        telefono: this.suscripcionForm.value.telefono,
        acepta: this.suscripcionForm.value.acepta,
        password: this.suscripcionForm.value.password
      };

      this.suscripcionService.crearSuscripcion(nuevaSuscripcion).subscribe({
        next: () => {
          alert('¡Gracias por unirte!');
          this.suscripcionForm.reset();
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error('Error al enviar la solicitud:', err);
          alert('Hubo un error al enviar la solicitud.');
        }
      });
    } else {
      this.suscripcionForm.markAllAsTouched();
    }
  }
}
