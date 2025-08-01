import { Component } from '@angular/core';
import { FormSusComponent } from "../../components/suscripcion/form-sus/form-sus.component";
import { BeneficiosSusComponent } from "../../components/suscripcion/beneficios-sus/beneficios-sus.component";
import { HeroSusComponent } from "../../components/suscripcion/hero-sus/hero-sus.component";

@Component({
  selector: 'app-suscripcion',
  standalone: true,
  imports: [FormSusComponent, BeneficiosSusComponent, HeroSusComponent],
  templateUrl: './suscripcion.component.html',
  styleUrl: './suscripcion.component.css'
})
export class SuscripcionComponent {

}
