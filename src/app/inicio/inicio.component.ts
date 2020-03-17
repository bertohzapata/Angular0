import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  personaje: any;

  constructor(private _starWarsService: StarwarsService) { }

  ngOnInit() {
    this._starWarsService.cargarPersonaje(2).subscribe(resp => this.personaje = resp);
    console.log(this.personaje);
    
  }


  mensaje(texto){
    console.log(texto);
    alert(texto);
  }

  escribir(cadena) {
    console.log(cadena);
    
  }

}
