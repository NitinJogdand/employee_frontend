import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilterPipe'
})
export class MyFilterPipePipe implements PipeTransform {

  transform(items:any[]): any {
    if (!items) {
      return items;
    }

    return items.filter(item => item.id%2 == 0);

  }

}
