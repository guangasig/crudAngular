import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

/**
 * Usamos LazyLoad para evitar que se carge todos los componentes en un solo load
 */
const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  /** Cuando ingresamos a la página aunth, se cargan todas las rutas de aunth-routing */
  { path: 'aunth', loadChildren: () => import('./aunth/aunth.module').then(m => m.AunthModule) },
  /** Ruta por defecto */
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
