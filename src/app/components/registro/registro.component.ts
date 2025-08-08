import { Component } from '@angular/core';
import { AutenticacionService } from '../../service/autenticacion.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../service/usuario.service';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private router: Router, private formB: FormBuilder, private usuarioService: UsuarioService) { }

  enviado: boolean = false;

  registroForm: FormGroup = this.formB.group({
    nombre: ['', Validators.required],
    direccion: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
  });

registrar = () => {
  if (this.registroForm.valid) {
    this.enviado = true;

    const nuevoUsuario = this.registroForm.value;

    this.usuarioService.crearUsuario(nuevoUsuario).subscribe({
      next: () => {
        console.log('Registro exitoso', nuevoUsuario);
        alert('Usuario registrado correctamente');
        this.registroForm.reset();
        this.router.navigateByUrl('/login');
      },
      error: (error) => {
        console.error('Error al registrar usuario:', error);
        alert('Error al registrar usuario');
      }
    });
  } else {
    this.registroForm.markAllAsTouched();
  }
}



  campoVacios = () => {
    return !this.enviado && Object.values(this.registroForm).some(valor => valor.
      trim?.() !== '');
  }



}
