import { Component } from '@angular/core';
import { AutenticacionService } from '../../../service/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    constructor(public authServicio: AutenticacionService, private router: Router) { }

}
