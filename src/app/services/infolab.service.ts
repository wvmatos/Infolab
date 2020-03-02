import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfolabService {

  constructor(
    private http: HttpClient
  ) { }

  getAula () {
   
    return this.http.get("https://sistema.uniso.br/rest/api/infolab/get");
    
  }


}
