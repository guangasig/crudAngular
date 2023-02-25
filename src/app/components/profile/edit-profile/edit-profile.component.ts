import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  profile = {
    cedula: '',
    apellidos: '',
    nombres: '',
    descripcion:'',
  }

  wasValidated:string = '';
  
  constructor() {

  }

  editProfile(f: NgForm) {
    
    this.wasValidated = 'was-validated';

    if (f.invalid) {
      return;
    }else{
      
    }

  }
}
