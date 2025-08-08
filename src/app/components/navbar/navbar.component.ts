import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionService } from '../../service/autenticacion.service';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpen: boolean = false;
  carritoCount: number = 0;

  constructor(
    public authServicio: AutenticacionService,
    private router: Router,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    // Suscribirse a los cambios en el carrito
    this.carritoService.carrito$.subscribe(items => {
      this.carritoCount = items.reduce((total, item) => total + (item.cantidad || 1), 0);
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    this.authServicio.logout();
    this.router.navigateByUrl('/');
  }

  irAlCarrito(): void {
    this.router.navigate(['/carrito']);
  }
}
