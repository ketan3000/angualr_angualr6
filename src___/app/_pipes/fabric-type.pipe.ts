import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fabricType'
})

export class FabricTypePipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    console.log(fabrics,fabricTypes);
    if (!fabricTypes || fabricTypes.length === 0) return fabrics;
    return fabrics.filter(fabric => fabricTypes.includes(fabric.type));
  }
}
