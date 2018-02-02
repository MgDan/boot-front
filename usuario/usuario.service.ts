import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import  { UsuarioModel } from './../modelo/usuario.model';


@Injectable()
export class UsuarioService {

  constructor(private http:HttpClient) { }

  public getUsuarios():Observable<UsuarioModel[]>{
  	return this.http.get<UsuarioModel[]>("http://localhost:8080/getUsers");
  	
  }

}
