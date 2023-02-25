import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck  {
  
  title = 'My School';
  ismenurequired = false;
  constructor( private router: Router) { }

  ngDoCheck(): void {
    let currecturl = this.router.url;
    if(currecturl=='/login' || currecturl=='/register' ) {
      this.ismenurequired = false;
    }else {
      this.ismenurequired = true;
    }
  }

  collapsed:boolean=false
}
