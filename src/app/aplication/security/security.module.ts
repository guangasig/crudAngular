import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersViewComponent } from './components/users/users-view/users-view.component';
import { RolesListComponent } from './components/roles/roles-list/roles-list.component';



@NgModule({
  declarations: [
    SecurityComponent,
    UsersListComponent,
    UsersViewComponent,
    RolesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SecurityModule { }
