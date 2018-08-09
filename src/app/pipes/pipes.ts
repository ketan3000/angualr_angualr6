import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filterPipe',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(value: any, args?: any[]): any {
        
        return  value.filter(item => {
           
            const {name, code} = item;
            console.log(args.indexOf(code));
            const hasFound = args.indexOf(code) != -1 || args.indexOf(name) != -1;
            
            return args.length ? hasFound : value;
         // return args.length ? args.indexOf(item.name) != -1 : value;
        })
      }
}

