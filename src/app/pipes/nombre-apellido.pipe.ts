import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomap'
})
export class NomapPipe implements PipeTransform {

  transform(nom: string, ap: string): string {
    let nombrealumno = nom;
    let apellidoalumno = ap;

    return "El nombre y apellido del alumno es"+nombrealumno+""+apellidoalumno;
  }
}

