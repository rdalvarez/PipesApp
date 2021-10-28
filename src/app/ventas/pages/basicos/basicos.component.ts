import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string='alvarez';
  nombreUpper: string='ALVAREZ';
  nombreCompleto: string='AlVaReZ RiCaRdO DaViD';


  fecha: Date = new Date(); //El día de hoy
}
