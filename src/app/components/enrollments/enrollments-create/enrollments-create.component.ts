import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-enrollments-create',
  templateUrl: './enrollments-create.component.html',
  styleUrls: ['./enrollments-create.component.css']
})

export class EnrollmentsCreateComponent {

  matricula: any = {
    carrea_id:null,
    estudiante_id:null,
    fecha_matricula:null,
    nivel:null
  };

  active = 1;

  cursos:Array<any> = [
    {text: 'Octavo', value: '8vo', subNivel:'Basica_Superior'},
    {text: 'Noveno', value: '9no', subNivel:'Basica_Superior'},
    {text: 'Decimo', value: '10mo', subNivel:'Basica_Superior'},
    {text: 'Primero', value: '1bgu',subNivel:'Bachillerato'},
    {text: 'Segundo', value: '2bgu',subNivel:'Bachillerato'},
    {text: 'Tercero', value: '3bgu', subNivel:'Bachillerato'},
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  addEnrollmentForm = this.formBuilder.group({
    carrera_id: ['', Validators.required],
    estudiante_id: ['', Validators.required],
    fecha_matricula: ['', Validators.required],
    nivel: ['', Validators.required],
  });

  selectCurso(event: any) {
    console.log(event.target.value);
  }

  addEnrollment():any{
    this.router.navigate(['/clientes']);
  }

}
