import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcularIva',
  standalone: true
})
export class CalcularIvaPipe implements PipeTransform {

  transform(subtotal: number, ivaPorcentaje: number = 15): number {
    return subtotal * (ivaPorcentaje / 100);
  }

}
