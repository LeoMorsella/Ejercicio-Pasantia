import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CargaPersona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListPersonaComponent implements OnInit {
  
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.obtenerPersonas();
  }

  eliminarPersona(dni:number) {
    if(confirm('Esta seguro que desea eliminar el registro?') ){
      this.personaService.eliminarPersona(dni).subscribe(data =>{this.personaService.obtenerPersonas()});
    }
  }

  editar(persona:CargaPersona) {
    this.personaService.actualizar(persona);
  }
}
