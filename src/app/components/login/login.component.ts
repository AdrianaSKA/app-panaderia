import { Component } from '@angular/core';
import { AutenticacionService } from '../../service/autenticacion.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private authServicio: AutenticacionService, private router: Router) { }

  login = () => {
    this.authServicio.login(this.usuario, this.password).subscribe({
      next: (usuario: any) => {
        if (!usuario) {
          this.error = 'Usuario o contraseña incorrecta';
          return;
        }

        localStorage.setItem('usuario', JSON.stringify(usuario));

        if (usuario.rol === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error al iniciar sesión';
      }
    });
  }




}
