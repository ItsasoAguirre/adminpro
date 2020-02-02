import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {

    let url = URL_SERVICES + '/image';

    // Cuando no hay imagen y devolvemos la imagen por defecto
    if ( !img ) {
      return url + '/usuarios/xxx';
    }

    // Cuando la imagen del usuario es de google
    if ( img.indexOf('https') >= 0) {
      return img;
    }
    switch (tipo) {
      case 'usuario':
        url += '/usuarios/' + img;
        break;
      case 'medico':
        url += '/medicos/' + img;
        break;
      case 'hospital':
        url += '/hospitales/' + img;
        break;
      default:
        console.log('tipo de imagen no existente, usuarios, medicos, hospitales');
        url += 'usuarios/xxx';
    }
    return url;
  }
}
