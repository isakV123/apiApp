import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VirtualTimeScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private url = "https://reqres.in/api/users";

  constructor(private Http: HttpClient) { }

  public listarUsuarios(pagina:Number) {

    return this.Http.get(`${this.url}?page=${pagina}`);
  }
  public buscarUsuario(id: Number) {
    return this.Http.get(`${this.url}/${id}`)
  }
}
