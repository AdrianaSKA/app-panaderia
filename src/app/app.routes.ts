import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GaleriaComponent } from './components/productos/galeria/galeria.component';
import { CrearProductoComponent } from './components/productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/productos/editar-producto/editar-producto.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { registroUsuarioGuard } from './guards/registro-usuario.guard';
import { loginMatchGuard } from './guards/login-match.guard';
import { autenticaGuard } from './guards/autentica.guard';
import { loginActivoGuard } from './guards/login-activo.guard';
import { CarritoComponent } from './pages/carrito/carrito.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Panadería Deluxe - Inicio' },
    { path: 'productos', component: ProductosComponent, title: 'Panadería Deluxe - Productos', canActivate: [autenticaGuard], canMatch: [loginActivoGuard] },
    { path: 'suscripcion', component: SuscripcionComponent, title: 'Panadería Deluxe - Suscripción', canActivate: [autenticaGuard], canMatch: [loginActivoGuard] },
    { path: 'productos/nuevo', component: CrearProductoComponent, title: 'Panadería Deluxe - Nuevo Producto', canActivate: [autenticaGuard], canMatch: [loginActivoGuard] },
    { path: 'productos-editar/:id', component: EditarProductoComponent, title: 'Panadería Deluxe - Editar Producto', canActivate: [autenticaGuard], canMatch: [loginActivoGuard] },
    { path: 'nosotros', component: NosotrosComponent, title: 'Panadería Deluxe - Nosotros', canActivate: [autenticaGuard], canMatch: [loginActivoGuard] },
    { path: 'contacto', component: ContactoComponent, title: 'Panadería Deluxe - Contacto', canActivate: [autenticaGuard], canMatch: [loginActivoGuard] },
    { path: 'carrito', component: CarritoComponent, title: 'Panadería Deluxe - Carrito', canActivate: [autenticaGuard], canMatch: [loginActivoGuard] }, 
    { path: 'login', component: LoginComponent, canMatch: [loginMatchGuard] },
    { path: 'registro', component: RegistroComponent, canDeactivate: [registroUsuarioGuard], canMatch: [loginMatchGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];