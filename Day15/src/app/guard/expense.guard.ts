import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): true | any {
    let val = localStorage.getItem('isUserLoggedIn');
    if (val != null && val == "true") {
      if (url == "/")
        this.router.parseUrl('/admin');
      else
        return true;
    } else {
      this.snackBar.open('Unauthorized access detected.', 'Close', {
        duration: 2500
      })
      return this.router.parseUrl('/');
    }
  }
}
