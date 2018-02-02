import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


import { AppRouting } from './app-routing.component'
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';



//decorador del modulo App que es el modulo principal de la aplicacion
@NgModule({
	//declara componentes, directivas o pipes que usaras
  declarations: [
    AppComponent,//al declararlo genera una etiqueta para ser usada en html
    //VideojuegoComponent
    UsuarioComponent, CrearUsuarioComponent

  ],
  //importa modulos internos de angular o propios
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule
  ],
  //importa servicios
  providers: [],
  //componente principal al cargar el modulo
  bootstrap: [AppComponent]
})
export class AppModule { }
