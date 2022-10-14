import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-abmalumnos',
  templateUrl: './abmalumnos.component.html',
  styleUrls: ['./abmalumnos.component.css']
})
export class AbmalumnosComponent implements OnInit {
  formularioAbm: FormGroup;

  constructor( 
  private fb: FormBuilder
  ) {
    this.formularioAbm = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      comision: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      alumnoFrecuente: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  agregarAlumno(){

    this.formularioAbm.addControl('control1', new FormControl('', []));

    console.log(this.formularioAbm);
  }
  formularioEnviado(){
    /* En este instancia el formulario fue enviado*/
    console.log("La novedad fue enviada y el alumno es: ", this.formularioAbm),
    alert("Enviado");
  }
}


