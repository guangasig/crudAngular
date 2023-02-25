import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ListStudentsComponent } from './components/students/list-students/list-students.component';
import { EnrollmentsCreateComponent } from './components/enrollments/enrollments-create/enrollments-create.component';
import { ViewNotesComponent } from './components/notes/view-notes/view-notes.component';
import { CreateCoursesComponent } from './components/courses/create-courses/create-courses.component';
//Profile
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { EditPasswordComponent } from './components/profile/edit-password/edit-password.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent, canActivate:[AuthGuardService] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-client', component: AddClientComponent, canActivate:[AuthGuardService] },
  { path: 'list-clients', component: ListClientComponent, canActivate:[AuthGuardService] },
  { path: 'edit-client/:id', component: EditClientComponent, canActivate:[AuthGuardService] },
  // Students
  { path: 'list-students', component: ListStudentsComponent, canActivate:[AuthGuardService] },
  { path: 'view-notes/:studentId', component: ViewNotesComponent, canActivate:[AuthGuardService] },
  // Enrollments
  { path: 'create-enrollment', component: EnrollmentsCreateComponent, canActivate:[AuthGuardService] },

  // Courses
  { path: 'create-courses', component: CreateCoursesComponent, canActivate:[AuthGuardService] },
  // Profile
  { 
    path: 'profile',
    component: ViewProfileComponent,
    canActivate:[AuthGuardService],
    children: [
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'edit-password', component: EditPasswordComponent },
    ],
  },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent},

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
