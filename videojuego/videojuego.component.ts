import {Component} from '@angular/core'; //import

/*
decorador aqui asocias con el html
tambien defines atributos y propiedades del 
componentes
*/

@Component({
	//en que etiqueta se mostrara la app
	selector: 'videojuego',
	template: `<h2>Componente de videojuegos</h2>
				<!--<h3>Mejor juego {{nombre}}</h3>-->
				<p *ngIf="mostrarJuegoActual">{{mejorJuegoActual}}</p>
				<p [style.background]="color" *ngIf="!mostrarJuegoActual">{{nombre}}</p>`
})

export class VideojuegoComponent {
	
	public nombre = 'Megaman';

	public mejorJuegoActual = 'TLOZBW';
	public mostrarJuegoActual = false;
	public color = "blue"
}