import { UsuarioComponent } from './usuario/usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';


import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


const routes:Routes =[
	{path:'',redirectTo:'/appusuario', pathMatch:'full'},
	//{path:'appcomponent',component:AppComponent},
	{path:'appusuario',component:UsuarioComponent},
	{path:'crearusuario', component:CrearUsuarioComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports:[RouterModule],
})
export class AppRouting{
	

}