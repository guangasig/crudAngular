import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  /**
   * Constructor
   * @param router The router object
   */
  constructor(
    private router: Router,
    private service: AuthService,
    private toastr: ToastrService
  ) { }

  /**
   * Can activate function
   * @param route The activated route snapshot object
   * @param state The router state snapshot object
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this.service.isLoggedIn()) { 
      return true; 
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
