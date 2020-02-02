import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line: import-blacklist
import { Observable, Subscriber, Subscription } from 'rxjs';
import { map , filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscripction: Subscription;

  constructor() {

    this.suscripction = this.regresaObservable()
    // .pipe(
      // retry(2)
    // )
    .subscribe(
      numero =>  console.log('Subs ', numero),
      error => console.error ('Error'),
      () => console.log('El observador termino')
    );
   }



  ngOnInit() {
  }

  ngOnDestroy() {
    console.log( 'Me voy del componente');
    this.suscripction.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return new Observable ( (observer: Subscriber<any>) => {

      let contador = 1;

      const intervalo = setInterval ( () => {
        contador ++;

        const salida = {
          valor: contador
        };
        observer.next(salida);

        // if ( contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if ( contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('Auxilio!!!');
        // }

      }, 1000);
    }).pipe(
      map( resp => resp.valor),
      filter ( (valor, index) => {
        if (  ( valor % 2) === 1) {
          // Numero impar
          return true;
        } else {
          // Numero par
          return false;
        }
      })
    );
  }
}
