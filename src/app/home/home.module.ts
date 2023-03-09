import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { MasterComponent } from '../layout/master/master.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    canActivate: [ AuthGuardService ],
    children: [
      { path: '', component: HomeComponent },
    ],
  }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
