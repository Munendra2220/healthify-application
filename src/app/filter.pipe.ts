import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: string): any {
    console.log('value', value);
    console.log('searchText', searchText)
    if (searchText == '') {
      return value
    };
    return value.filter((item: any) => item['name'].toLowerCase().includes(searchText));
  }

}
