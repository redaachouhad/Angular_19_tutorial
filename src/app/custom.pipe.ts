import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'custom',
  pure: false
})
export class CustomPipe implements PipeTransform {
  private DatePipe = new DatePipe('en-US');
  transform(value: any, ...args: any[]): any {
    // return value ? "+212 " + value : value;
    return this.DatePipe.transform(value, 'MM/YYYY');
  }

}
