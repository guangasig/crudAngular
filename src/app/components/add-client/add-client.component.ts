import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})

export class AddClientComponent {
  
  constructor(private fromBuilder:FormBuilder, private router: Router) { }

  addClientForm =  this.fromBuilder.group({
    nombre: ['', Validators.required],
    email: ['', Validators.required]
  })

  addClient():any{
    this.router.navigate(['/clientes']);
  }

}
