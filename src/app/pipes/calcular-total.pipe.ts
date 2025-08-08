import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcularTotal',
  standalone: true
})
export class CalcularTotalPipe implements PipeTransform {

  transform(subtotal: number, ivaPorcentaje: number = 19): number {
    return subtotal + (subtotal * (ivaPorcentaje / 100));
  }

}
