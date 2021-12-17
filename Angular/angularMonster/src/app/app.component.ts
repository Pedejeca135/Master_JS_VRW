/*Serie de imports */
import { Component } from '@angular/core';

//Decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularMonster The one and only';
  public mostrar_videojuegos:boolean = true;

  ocultarVideoJuegos(value:boolean=true){
    this.mostrar_videojuegos = value;
  }
}
