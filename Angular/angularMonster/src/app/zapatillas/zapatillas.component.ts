import{Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl:'./zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente zapatillas";
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas=[
            new Zapatilla('Rebook classic', 'rebook','blanco',80,true),
            new Zapatilla('Air force', 'Nike','negro',80,true),
            new Zapatilla('Adidas yezzy', 'Adidas','rojo',80,true)
        ];
    }
    ngOnInit(){
        console.log("se ejecuto on init en el componente zapatillas");
        console.log(this.zapatillas);
    }

}

