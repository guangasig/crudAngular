import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private service:AuthService, private router:Router ) { }

  registerform =  this.formBuilder.group({
    name: this.formBuilder.control('', Validators.compose([Validators.required, Validators.maxLength(10)])),
    email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(6)])),
  })

  proceedRegistration() {
    if(this.registerform.valid){
      this.service.register(this.registerform.value).subscribe(res =>{
        this.toastr.success('Por favor comuniquese con el administrador','Registrado satisfactoriamente!');
        this.router.navigate(['login']);
      })
    }else{
      this.toastr.warning("Por favor, revisar los campos requeridos")
    }
  }
}
