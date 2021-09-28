import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from, Observable } from 'rxjs';
import { AuthguardServiceService } from '../services/Authguard/authguard-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AunthenticationGuard implements CanActivate {

  constructor(private authguardService: AuthguardServiceService, private router: Router) { }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
  canActivate(): boolean {  
    if (!this.authguardService.gettoken()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.authguardService.gettoken();
}
}
