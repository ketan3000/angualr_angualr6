import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countColour'
})

export class CountColourPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {  
    console.log(fabricTypes)  ;
    if (!fabricTypes || fabricTypes.length === 0) return fabrics;
    return fabrics.filter(fabric => fabricTypes.includes(fabric.colour));
  }
}

