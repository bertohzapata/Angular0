import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  persona1= {
    nombre: 'Juan',
    apellidos: 'Robles',
    descripcion: 'CTO de la compañia',
    img: 'https://arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/ZPAPKLU77KOJRSTLGPQTUIZ2NA.jpg'
  };
  persona2= {
    nombre: 'Lorena',
    apellidos: 'Cabrera',
    descripcion: 'CEO de la compañia',
    img: 'https://thinkandsell.com/wp-content/uploads/2012/11/importancia-empleados-experiencia-de-cliente.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

  mensaje(texto){
    console.log(texto);
    alert(texto);
  }

}
