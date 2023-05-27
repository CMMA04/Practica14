import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorradoCalificacionesPageRoutingModule } from './borrado-calificaciones-routing.module';

import { BorradoCalificacionesPage } from './borrado-calificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorradoCalificacionesPageRoutingModule
  ],
  declarations: [BorradoCalificacionesPage]
})
export class BorradoCalificacionesPageModule {}
