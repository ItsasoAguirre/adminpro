import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      subMenu: [
        {titulo: 'Dashboard', url: '/dashboard', icono: 'mdi mdi-gauge'},
        {titulo: 'ProgressBar', url: '/progress', icono: 'mdi mdi-gauge'},
        {titulo: 'Gráficas', url: '/graficas1', icono: 'mdi mdi-gauge'},
        {titulo: 'Promesas', url: '/promesas', icono: 'mdi mdi-gauge'},
        {titulo: 'Rxjs', url: '/rxjs', icono: 'mdi mdi-gauge'}
      ]
    }
  ];
  constructor() { }
}
