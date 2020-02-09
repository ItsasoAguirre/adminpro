import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import Swal from 'sweetalert2';
import { ModalUploadComponent } from '../../components/modal-upload/modal-upload.component';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    private usuarioService: UsuarioService,
    public modalUploadComponent: ModalUploadService
    ) { }

  ngOnInit() {
    this.cargarUsuarios();

    this.modalUploadComponent.notificacion
        .subscribe ( resp => this.cargarUsuarios());
  }

  mostrarModal( id: string) {
    this.modalUploadComponent.mostrarModal( 'usuarios', id);
  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuarioService.cargarUsuarios(this.desde)
    .subscribe ((resp: any) => {
      this.totalRegistros = resp.total;
      this.usuarios = resp.usuarios;
      this.cargando = false;

    });
  }

  cambiarDesde(valor: number) {

    const desde = this.desde + valor;

    if (desde >= this.totalRegistros || desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
  }

  buscarUsuario( termino: string) {
    if ( termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }
    this.cargando = true;

    this.usuarioService.buscarUsuarios(termino)
    .subscribe((usuarios: Usuario[]) => {
      console.log(usuarios);
      this.usuarios = usuarios;
      this.cargando = false;
    });
  }

  guardarUsuario(usuario: Usuario) {
    this.usuarioService.actualizarUsuario(usuario)
    .subscribe();
  }

  borrarUsuario(usuario: Usuario) {
    if ( usuario._id === this.usuarioService.usuario._id) {
      Swal.fire('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
      return;
    }
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Esta a punto de borrar a ' + usuario.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar',
      cancelButtonText: 'No, salir'
    }).then(borrar => {

      if (borrar) {
        this.usuarioService.borrarUsuario(usuario._id)
        .subscribe( borrado => {
            this.cargarUsuarios();
        });
      }
    });
  }
}
