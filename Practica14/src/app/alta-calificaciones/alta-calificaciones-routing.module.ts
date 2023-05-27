import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaCalificacionesPage } from './alta-calificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: AltaCalificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaCalificacionesPageRoutingModule {}
