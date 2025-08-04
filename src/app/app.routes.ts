import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GaleriaComponent } from './components/productos/galeria/galeria.component';
import { CrearProductoComponent } from './components/productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/productos/editar-producto/editar-producto.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';

export const routes: Routes = [

    { path: '', component: HomeComponent, title: 'Panadería Deluxe - Inicio' },
    { path: 'productos', component: ProductosComponent, title: 'Panadería Deluxe - Productos' },
    { path: 'suscripcion', component: SuscripcionComponent, title: 'Panadería Deluxe - Suscripción' },
    { path: 'productos/nuevo', component: CrearProductoComponent, title: 'Panadería Deluxe - Nuevo Producto' },
    { path: 'productos-editar/:id', component: EditarProductoComponent, title: 'Panadería Deluxe - Editar Producto' },
    { path: 'nosotros', component: NosotrosComponent, title: 'Panadería Deluxe - Nosotros' },
    { path: 'contacto', component: ContactoComponent, title: 'Panadería Deluxe - Contacto' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
