import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure'
})
export class ImpurePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return new Date().toLocaleTimeString();
  }

}
