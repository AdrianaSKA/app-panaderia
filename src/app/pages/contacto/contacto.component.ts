import { Component } from '@angular/core';
import { HeroContacComponent } from "../../components/contacto/hero-contac/hero-contac.component";
import { InfoContacComponent } from "../../components/contacto/info-contac/info-contac.component";
import { FormContacComponent } from "../../components/contacto/form-contac/form-contac.component";
import { MapaContacComponent } from "../../components/contacto/mapa-contac/mapa-contac.component";

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [HeroContacComponent, InfoContacComponent, FormContacComponent, MapaContacComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
