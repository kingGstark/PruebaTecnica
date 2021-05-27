import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], term: string): any {
        // Filtrando por propiedad fullName
        return items.filter(item => item.fullName.indexOf(term) !== -1);
    }
}