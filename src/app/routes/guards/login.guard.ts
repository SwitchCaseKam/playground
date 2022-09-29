import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      localStorage.setItem('token', 'cracovia')
      const token = localStorage.getItem('token');
      if (token !== 'x' && state.url.includes('login')) {
        console.log('token=', token, ' so you will be redirect to dashboard');
        this.router.navigate([this.activatedRoute.url, 'dashboard']);
      } else if (token === 'x' && state.url.includes('dashboard')) {
        console.log('token=', token, ' so you are not authed, you will be redirect to login');
        this.router.navigate([this.activatedRoute.url, 'login']);
      }
      return true;
  }
  
}
