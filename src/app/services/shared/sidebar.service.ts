import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal', icono: 'mdi mdi-gauge',
      subMenu: [
        {titulo: 'Dashboard', url: '/dashboard', icono: 'mdi mdi-gauge'},
        {titulo: 'ProgressBar', url: '/progress', icono: 'mdi mdi-gauge'},
        {titulo: 'Gráficas', url: '/graficas1', icono: 'mdi mdi-gauge'},
        {titulo: 'Promesas', url: '/promesas', icono: 'mdi mdi-gauge'},
        {titulo: 'Rxjs', url: '/rxjs', icono: 'mdi mdi-gauge'}
      ]
    },
    {titulo: 'Mantenimientos', icono: 'mdi mdi-folder-lock-open',
    subMenu: [
      {titulo: 'Usuarios', url: '/usuarios', icono: 'mdi mdi-gauge'},
      {titulo: 'Hospitales', url: '/hospitales', icono: 'mdi mdi-hospital-building'},
      {titulo: 'Medicos', url: '/medicos', icono: 'mdi mdi-gauge'}

    ]
  }
  ];
  constructor() { }
}
