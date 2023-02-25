import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { HomeComponent } from './home/home.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { ListStudentsComponent } from './components/students/list-students/list-students.component';
import { CreateStudentsComponent } from './components/students/create-students/create-students.component';
import { CreateCoursesComponent } from './components/courses/create-courses/create-courses.component';
import { EnrollmentsCreateComponent } from './components/enrollments/enrollments-create/enrollments-create.component';
import { ListPeriodsComponent } from './components/periods/list-periods/list-periods.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewNotesComponent } from './components/notes/view-notes/view-notes.component';
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { EditPasswordComponent } from './components/profile/edit-password/edit-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddClientComponent,
    EditClientComponent,
    ListClientComponent,
    RegisterComponent,
    LoginComponent,
    // ListStudentsComponent,
    CreateStudentsComponent,
    CreateCoursesComponent,
    EnrollmentsCreateComponent,
    ListPeriodsComponent,
    PageNotFoundComponent,
    ViewNotesComponent,
    ViewProfileComponent,
    EditProfileComponent,
    EditPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbNavModule,
    NgbModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }