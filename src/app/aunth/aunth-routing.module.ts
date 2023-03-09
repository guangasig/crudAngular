import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EasyComponent } from '../layout/easy/easy.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes:Routes = [
    { 
      path: '',
      component: EasyComponent,
      children: [
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent },
        { path: '**', redirectTo: 'login' },
      ]
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AunthRoutingModule { }
