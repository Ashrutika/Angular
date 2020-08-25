import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {

  transform(heros: any, item:any): any {
    if(item === undefined) return heros;

    return heros.filter(function(data){
      return data.name.toLowerCase().includes(item.toLowerCase());
    })
  }


}
