import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string;

  auth2: any;

  constructor( private router: Router, private usuarioService: UsuarioService) { }
  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '846842414251-88i1kk6ca8jnesnm85ahmkn06b56jvkk.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignIn( document.getElementById('btnGoogle'));
    });
  }

  attachSignIn( element) {
    this.auth2.attachClickHandler ( element, {}, (googleUser) => {

      const profile = googleUser.getBasicProfile();

      const token = googleUser.getAuthResponse().id_token;

      this.usuarioService.loginGoogle(token)
      .subscribe( correcto => window.location.href = '#/dashboard');
    } );
  }

  ingresar( formulario: NgForm) {

    if ( formulario.invalid) {
      return;
    }

    const usuario = new Usuario(
        null, formulario.value.email, formulario.value.password
    );
    this.usuarioService.login(usuario, formulario.value.recuerdame)
    .subscribe( correcto => this.router.navigate(['dashboard']));
  }
}
