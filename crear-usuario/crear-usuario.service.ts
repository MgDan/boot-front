import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import {RestResponse} from './../modelo/restResponse.model';
import {UsuarioModel} from './../modelo/usuario.model';


@Injectable()
export class CrearUsuarioService {

  constructor(private http:HttpClient) { }

  public saveOrUpdate(user:UsuarioModel):Observable<RestResponse>{
  	return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate",JSON.stringify(user) );
  }

}
