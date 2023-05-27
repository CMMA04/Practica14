import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorradoCalificacionesPage } from './borrado-calificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: BorradoCalificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorradoCalificacionesPageRoutingModule {}
