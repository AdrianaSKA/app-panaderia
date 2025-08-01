import { Component } from '@angular/core';
import { ValoresComponent } from "../../components/nosotros/valores/valores.component";
import { HistoriaComponent } from "../../components/nosotros/historia/historia.component";
import { EquipoComponent } from "../../components/nosotros/equipo/equipo.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [ValoresComponent, HistoriaComponent, EquipoComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
