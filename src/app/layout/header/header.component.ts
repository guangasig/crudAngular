import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

  ismenurequired = false;
  constructor( private router: Router) { }

  ngDoCheck(): void {
    let currecturl = this.router.url;
    console.log('currecturl',currecturl);
    if(currecturl=='/aunth/login' || currecturl=='/register' ) {
      this.ismenurequired = false;
    }else {
      this.ismenurequired = true;
    }
  }

  collapsed:boolean=true
}
