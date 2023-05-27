import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BajaCalificacionesPage } from './baja-calificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: BajaCalificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BajaCalificacionesPageRoutingModule {}
