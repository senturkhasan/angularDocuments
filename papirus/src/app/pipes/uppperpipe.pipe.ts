import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppperpipe'
})
export class UppperpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var val =value as string;
    
    return val.toUpperCase();
  }

}
