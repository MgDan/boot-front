import { Component, OnInit } from '@angular/core';
import { CrearUsuarioService } from './crear-usuario.service';

import {Router} from '@angular/router'

import {UsuarioModel} from './../modelo/usuario.model';
import {OK} from './../modelo/httpstatus';
import {NOT_ACCEPTABLE} from './../modelo/httpstatus';




@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  providers:[CrearUsuarioService]
})
export class CrearUsuarioComponent implements OnInit {

	private usuario:UsuarioModel;
	private message:string;

  constructor( private crearUsuarioService: CrearUsuarioService, private router:Router) {

  	this.usuario = new UsuarioModel();
   }

  ngOnInit() {
  }

  public saveOrUpdate(user:UsuarioModel){
  	this.crearUsuarioService.saveOrUpdate(this.usuario).subscribe(res=>{
  		if (res.responseCode == OK) {
  			this.router.navigate(['/appusuario']);
  		}else{
  			this.message = res.message;
  		}
  	})
  }

}
