import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  URL_SERVICIO = 'https://swapi.co/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) { }



  cargarPersonaje(id) {
    const url = `${this.URL_SERVICIO}/people/${id}`;
    console.log(url);
    
    // const url2 = this.URL_SERVICIO + '/people/' + id;
    return this._http.get(url, {headers: this.headers});
  }
}

// Comando para crear servicio
//  ng generate service nombreServicio
