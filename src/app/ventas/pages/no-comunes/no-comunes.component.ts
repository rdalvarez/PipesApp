import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {


    // i18nSelect
    nombre: string = 'Ricardo';
    genero: string = 'masculino';

    invitacionMapa = {
      'masculino': 'invitarlo',
      'femenino': 'invitarla'
    }

    //i18nPlural
    clientes: string[] = ['Maria', 'Pedro', 'Ricardo', 'Hernando', 'Eduardo'];
    clientesMapa = {
      '=0': 'no tenemos ningun cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      '=2': 'tenemos dos clientes esperando.',
      'other': 'tenemos # clientes esperando.',
    }

    cambiarCliente() {
      this.nombre = "Veronita";
      this.genero = "femenino";
    }
  
    borrarCliente() {
      //console.log(this.clientes.splice(1,this.clientes.length));
      this.clientes.pop()
    }

    // KeyValue Pipe
    
    persona = {
      nombre: 'Ricardo',
      edad: 35,
      direccion: 'Buenos Aires, Argentina'
    }
    
    // Json Pipe
    heroes = [
      {
        nombre: 'Superman',
        vuela: true
      },
      {
        nombre:'Robin',
        vuela: true
      },
      {
        nombre:'Aquaman',
        vuela: false
      }
    ]
    //Async Pipe
    miObservable = interval(200); // 1,2,3,45,6,7,8,9

    valorPromesa = new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve( 'Tenemos data de promesa' )
      }, 3500);
    })



}
