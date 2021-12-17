import{Component} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideoJuegoComponent{
    public titulo: string;
    public listado:string = "";
    constructor(){
        this.titulo = "componente de videojuegos";
        this.listado = "listado de los juegos mas populares";

        console.log("se ha cargado el componente: videojuego.component.ts carnal");
    }
}