import { Component, OnInit } from '@angular/core';

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
    

}
