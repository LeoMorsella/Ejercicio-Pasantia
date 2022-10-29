import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { CargaPersona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { ToastrService } from 'ngx-toastr/public_api';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-carga-persona',
  templateUrl: './carga-persona.component.html',
  styleUrls: ['./carga-persona.component.css']
})
export class CargaPersonaComponent implements OnInit, OnDestroy {

  form:FormGroup;
  subscription: Subscription;
  persona: CargaPersona;
  idPersona = 0;
  constructor(private formBuilder: FormBuilder, private personaService:PersonaService) {
    this.form = this.formBuilder.group({
      //id:0,
      //dni:['',[Validators.required]],
      dni:0,
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      fechaNacimiento:['',[Validators.required]]

    })
   }

  ngOnInit(): void {
   this.subscription= this.personaService.obtenerPersona().subscribe(data => { console.log(data)
    this.persona = data
    this.form.patchValue( {
      nombre: this.persona.nombre,
      apellido: this.persona.apellido,
      fechaNacimiento: this.persona.fechaNacimiento
    });
   
  });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  guardarPersona() {

    if(this.idPersona == 0) {

   
    const persona:CargaPersona = {
      //dni:this.form.get('dni')?.value,
      nombre:this.form.get('nombre')?.value,
      apellido:this.form.get('apellido')?.value,
      fechaNacimiento:this.form.get('fechaNacimiento')?.value

    }
    this.personaService.guardarPersona(persona).subscribe(data => {
      //this.toastr.success('Registro Agregado','La persona fue agregada');
      console.log('Guardado correctamente');
      this.personaService.obtenerPersonas();
      this.form.reset();
    });
  }
  }



}
