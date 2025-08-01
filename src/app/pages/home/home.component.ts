import { Component } from '@angular/core';
import { HeroComponent } from "../../components/home/hero/hero.component";
import { DescriptionComponent } from "../../components/home/description/description.component";
import { ProductsComponent } from "../../components/home/products/products.component";
import { TestimoniosComponent } from "../../components/home/testimonios/testimonios.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, DescriptionComponent, ProductsComponent, TestimoniosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
