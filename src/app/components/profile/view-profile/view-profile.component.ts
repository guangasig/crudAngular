import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {

  links = [
    { title: 'Editar Datos', fragment: 'edit-profile' },
    { title: 'Editar Constraseña', fragment: 'edit-password' }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {})
   }

}
