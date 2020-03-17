import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { InicioComponent } from './inicio/inicio.component'

import { RutasModule } from './rutas.module';

import { StarwarsService } from './starwars.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RutasModule
  ],
  providers: [  
    StarwarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
