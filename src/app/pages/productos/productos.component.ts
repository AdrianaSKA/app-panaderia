import { Component } from '@angular/core';
import { FiltrosComponent } from "../../components/productos/filtros/filtros.component";
import { GaleriaComponent } from "../../components/productos/galeria/galeria.component";
import { HeroProduComponent } from "../../components/productos/hero-produ/hero-produ.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FiltrosComponent, GaleriaComponent, HeroProduComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
