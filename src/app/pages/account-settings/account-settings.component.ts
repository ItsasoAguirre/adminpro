import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public settings: SettingsService ) { }


  ngOnInit() {
    this.colocarCheck();
  }
   // Función para acceder directamente al DOM y cambiar el tema.
  cambiarColor(tema: string, link: any) {
    // En link tenemos todo el elemento HTML
    this.aplicarCheck(link);

    this.settings.aplicarTema(tema);
  }
  // Funcion para borrar a todos los elementos iguales una clase
  // y luego añadirsela al que realmente la necesita con vanilla JavaScrip
  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for ( const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');

    const tema = this.settings.ajustes.tema;
    for ( const ref of selectores) {
     if ( ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
     }
    }

  }
}
