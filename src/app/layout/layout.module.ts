import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MasterComponent } from './master/master.component';
import { EasyComponent } from './easy/easy.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MasterComponent,
    EasyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: [
    MasterComponent,
    EasyComponent,
    RouterModule,
  ]
})

export class LayoutModule { }
