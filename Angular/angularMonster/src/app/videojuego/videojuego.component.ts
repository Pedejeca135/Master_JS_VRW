import{Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideoJuegoComponent implements OnInit,DoCheck,OnDestroy {
    public titulo: string;
    public listado:string = "";
    constructor(){
        this.titulo = "componente de videojuegos";
        this.listado = "listado de los juegos mas populares";

        console.log("se ha cargado el componente: videojuego.component.ts carnal");
    }

    ngOnInit(){
        console.log("oninit ejecutado");
    }

    ngDoCheck(){
        console.log("Docheck ehecutado");
    }

    ngOnDestroy(){
        console.log("Ondestroy ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "nnnnn";
    }
}