import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'calificaciones',
    pathMatch: 'full'
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: 'alta-calificaciones',
    loadChildren: () => import('./alta-calificaciones/alta-calificaciones.module').then( m => m.AltaCalificacionesPageModule)
  },
  {
    path: 'baja-calificaciones',
    loadChildren: () => import('./baja-calificaciones/baja-calificaciones.module').then( m => m.BajaCalificacionesPageModule)
  },
  {
    path: 'borrado-calificaciones',
    loadChildren: () => import('./borrado-calificaciones/borrado-calificaciones.module').then( m => m.BorradoCalificacionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
