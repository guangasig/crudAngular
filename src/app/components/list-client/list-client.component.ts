import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent {

  empleados:any = [];

  constructor(private formBuilder:FormBuilder, private service:AuthService ) {

    
  }

  ngOnInit(){
    this.service.getUsers().subscribe(res => {
      this.empleados = res
    })
  }
}
