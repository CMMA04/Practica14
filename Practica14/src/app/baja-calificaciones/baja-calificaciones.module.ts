import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BajaCalificacionesPageRoutingModule } from './baja-calificaciones-routing.module';

import { BajaCalificacionesPage } from './baja-calificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BajaCalificacionesPageRoutingModule
  ],
  declarations: [BajaCalificacionesPage]
})
export class BajaCalificacionesPageModule {}
