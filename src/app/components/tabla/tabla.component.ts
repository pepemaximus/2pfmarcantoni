import { Component, OnInit, PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Basealumno } from 'src/app/models/basealumno';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  basealumnos: Basealumno[] = [
    { 
      nombre: 'Jose',
      apellido: 'Marcantoni',
      comision: '32320',
      fechaNacimiento: new Date(1979, 6, 4),
      alumnoFrecuente: true,
    },
    { 
      nombre: 'Victor',
      apellido: 'Pérez',
      comision: '32485',
      fechaNacimiento: new Date(2000, 0, 16),
      alumnoFrecuente: false,
    },
    { 
      nombre: 'Micaela',
      apellido: 'Rodriguez',
      comision: '33502',
      fechaNacimiento: new Date(1998, 3, 22),
      alumnoFrecuente: true,
    }
  ];
  columnas: string[] = ['nombre', 'apellido','comision','fechaNacimiento','alumnoFrecuente','acciones'];
  dataSource: MatTableDataSource<Basealumno> = new MatTableDataSource<Basealumno>(this.basealumnos);
  constructor(
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
  }

  //Este filtro es por cualquiera de los valores nombre apellido comision alumno frecuente o fecha de nacimiento
  filtro (event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;

    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();

  }

  editar(){
    this.dialog.open(DialogComponent, {
      width: '180px'
    })
  }
}
