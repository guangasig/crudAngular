import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AunthRoutingModule } from './aunth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AunthRoutingModule,
  ]
})

export class AunthModule { }
