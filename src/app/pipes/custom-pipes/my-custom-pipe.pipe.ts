import { OnChanges, Pipe, PipeTransform, SimpleChanges } from '@angular/core';

@Pipe({
  name: 'snakePipe',
  pure: true
})
export class MyCustomPipePipe implements PipeTransform, OnChanges {

  transform(value: string, ...args: unknown[]): string {
    console.log('snake pipe transform called')
    const valueToUpperArr = value.toString().toUpperCase().split('');
    valueToUpperArr.forEach((letter, index) => {
      if (index%2==1) { valueToUpperArr[index] = letter.toLowerCase(); }
    });
    return valueToUpperArr.join('');
  }

  public ngOnChanges(changes: SimpleChanges): void {
      console.log('snakePipe: ', changes)
  }
}
