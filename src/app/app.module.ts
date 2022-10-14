import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TablaComponent } from './components/tabla/tabla.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { AbmalumnosComponent } from './components/abmalumnos/abmalumnos.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from "@angular/common";
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NomapPipe } from './pipes/nombre-apellido.pipe';
import { SizeDirective } from './directives/size.directive';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    AbmalumnosComponent,
    DialogComponent,
    NomapPipe,
    SizeDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    CommonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
