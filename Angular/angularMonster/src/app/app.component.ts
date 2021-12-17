/*Serie de imports */
import { Component } from '@angular/core';

import { configuracion } from './models/configuration';

//Decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularMonster The one and only';
  public descripcion:string;
  public mostrar_videojuegos:boolean = true;
  public config = configuracion;

  constructor(){
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
  }

  ocultarVideoJuegos(value:boolean=true){
    this.mostrar_videojuegos = value;
  }
}
