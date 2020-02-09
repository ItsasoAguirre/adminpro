import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor( private usuarioService: UsuarioService, private router: Router ) { }

  ngOnInit() {
    init_plugins();

    this.registerForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl (null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),
    }, {validators: this.sonIguales('password', 'password2')});

    this.registerForm.setValue ({
      nombre: 'Test1',
      correo: 'Test1@Test.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    });
  }

  registrarUsuario() {

    if ( this.registerForm.invalid ) {
      return;
    }

    if ( !this.registerForm.value.condiciones ) {
      Swal.fire('Importante', 'Debe de aceptar las condiciones', 'warning');
      console.log ('Debe de aceptar las condiciones');
      return;
    }
    const usuario = new Usuario (
      this.registerForm.value.nombre,
      this.registerForm.value.correo,
      this.registerForm.value.password
    );

    this.usuarioService.crearUsuario(usuario)
    .subscribe( resp => this.router.navigate(['/login']));
  }

  sonIguales( campo1: string, campo2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;
      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }
}
