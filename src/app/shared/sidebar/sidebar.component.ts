import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;
  menus: any;

  constructor( private sidebarService: SidebarService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.getMenu();
  }

  logout() {
    this.usuarioService.logout();
  }

  getMenu() {
    this.menus = this.sidebarService.menu;
  }

}
