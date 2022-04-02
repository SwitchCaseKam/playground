import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mergerPipe'
})
export class MergerPipePipe implements PipeTransform {

  transform(value: string, mergerSign: string = 'X'): string {
    return value.replace(/\s+/g, mergerSign);
  }

}
