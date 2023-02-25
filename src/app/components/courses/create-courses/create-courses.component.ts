import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Curso } from './curso'

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})

export class CreateCoursesComponent {

  nombreCtrl = new FormControl('',[Validators.required,Validators.minLength(5)],[]);
  descripcionCtrl = new FormControl('',[Validators.required,Validators.minLength(5)],[]);
  estadoCtrl = new FormControl('',[Validators.required,Validators.minLength(5)],[]);

  wasValidated:string = '';
  curso:Curso = {
    nombre: '', 
    descripcion: '', 
    estado: false
  }
  
  constructor() {
    this.nombreCtrl.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      if (this.nombreCtrl.valid){
        this.curso.nombre = this.nombreCtrl.value ? this.nombreCtrl.value : '';
      }
    });
    this.descripcionCtrl.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      if (this.descripcionCtrl.valid){
        this.curso.descripcion = this.descripcionCtrl.value? this.descripcionCtrl.value : '';
      }
    });
  }

  getNombreCtrl(event: Event) {
    event.preventDefault();
    console.log(this.nombreCtrl.value);
  }

  addCourses(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.wasValidated = 'was-validated';

    if (this.nombreCtrl.valid && this.descripcionCtrl.valid){
        console.log('ok');
    }else{
      
    }
  }

}
