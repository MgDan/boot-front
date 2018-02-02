import { UsuarioModel } from './../modelo/usuario.model'
import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './usuario.service';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {

	private usuarios: Array<UsuarioModel>;

  constructor(private UsuarioService:UsuarioService) {

  }

  ngOnInit() {
  	this.loadUsuarios();
  }

  private loadUsuarios():void{
  	this.UsuarioService.getUsuarios().subscribe(res=>{
  		this.usuarios = res;
  		console.log(res);
  	});
  }

}
