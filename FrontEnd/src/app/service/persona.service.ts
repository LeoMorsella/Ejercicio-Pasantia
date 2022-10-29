import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CargaPersona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  myAppUrl ='https://localhost:44348/';
  myApiUrl = 'api/Persona/';
  list: CargaPersona[] ;
  private actualizaFormulario = new BehaviorSubject<CargaPersona>({} as any);
  constructor(private http:HttpClient) { }

  guardarPersona(persona:CargaPersona):Observable<CargaPersona> {
    return this.http.post<CargaPersona>(this.myAppUrl + this.myApiUrl,persona);
  }

  eliminarPersona(dni:number): Observable<CargaPersona> {
    return this.http.delete<CargaPersona>(this.myAppUrl+this.myApiUrl + dni);
  }
  obtenerPersonas() {
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise().then(data =>{
        this.list = data as CargaPersona[]
    });
  }

  obtenerPersonasFanDragonRojo(event:any) {
    if(event.target.checked){
      this.http.get(this.myAppUrl+this.myApiUrl+"GetFanDragonRojo").toPromise().then(data =>{
        this.list = data as CargaPersona[]
      });
    }
    else {
      this.obtenerPersonas()
    }
    
  }

  obtenerPersonasFanJojo(event:any) {
    if(event.target.checked){
    this.http.get(this.myAppUrl+this.myApiUrl+"GetFanJojo").toPromise().then(data =>{
      this.list = data as CargaPersona[]
    });
  }
  else {
    this.obtenerPersonas();
  }
  }

  actualizarPersona(id:number, persona:CargaPersona): Observable<CargaPersona> {
    return this.http.put<CargaPersona>(this.myAppUrl + this.myAppUrl + id, persona);
  }

  actualizar(persona:CargaPersona) {
    this.actualizaFormulario.next(persona);
  }

  obtenerPersona():Observable<CargaPersona>{
    return this.actualizaFormulario.asObservable();
  }

}
