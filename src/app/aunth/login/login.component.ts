import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginData: any;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private service:AuthService, private router:Router ) { }

  loginform =  this.formBuilder.group({
    email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(6)])),
  })

  login() {
    if(this.loginform.valid){

      this.service.login(this.loginform.value).subscribe(response => {
        
        console.log('response',response);

        this.loginData = response
        if (this.loginData.status) {
          sessionStorage.setItem('token', this.loginData.token);
          sessionStorage.setItem('user', JSON.stringify(this.loginData.user));
          console.log(sessionStorage.getItem('user'));
          console.log(sessionStorage.getItem('token'));
          this.router.navigate(['home']);
        }else{
          this.toastr.error('hola',this.loginData.msg);
        }

      })

    }else{
      this.toastr.warning("Por favor, revisar los campos requeridos")
    }
  }

}