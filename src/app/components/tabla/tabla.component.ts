import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Basealumno } from 'src/app/models/basealumno';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  basealumnos: Basealumno [] = [
    { 
      nombre: 'Jose',
      apellido: 'Marcantoni',
      foto: '//src/assets/josemarcantoni.jpg',
      comision: '32320',
      fechaNacimiento: new Date(1979, 6, 4),
      alumnoFrecuente: true,
    },
    { 
      nombre: 'Victor',
      apellido: 'Pérez',
      foto: '//src/assets/victorperez.jpg',
      comision: '32485',
      fechaNacimiento: new Date(2000, 0, 16),
      alumnoFrecuente: false,
    },
    { 
      nombre: 'Micaela',
      apellido: 'Rodriguez',
      foto: '//src/assets/micaelarodriguez.jpg',
      comision: '33502',
      fechaNacimiento: new Date(1998, 3, 22),
      alumnoFrecuente: true,
    }
  ]
  columnas: string [] = ['nombre', 'apellido','foto','comision','fechaNacimiento','alumnoFrecuente','acciones']
  dataSource: MatTableDataSource<Basealumno> = new MatTableDataSource<Basealumno>(this.basealumnos);
  constructor() { }

  ngOnInit(): void {
  }

  filtrarApellido () {
  }
  filtrarComision () {

  }
}
