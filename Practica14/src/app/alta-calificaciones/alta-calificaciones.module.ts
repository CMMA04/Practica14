import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltaCalificacionesPageRoutingModule } from './alta-calificaciones-routing.module';

import { AltaCalificacionesPage } from './alta-calificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaCalificacionesPageRoutingModule
  ],
  declarations: [AltaCalificacionesPage]
})
export class AltaCalificacionesPageModule {}
