import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  isUserLoggedIn: boolean = false;

  usersList = [
    {
      mail: "admin@admin.com",
      pass: "admin",
    },
    {
      mail: "user@user.com",
      pass: "user",
    }
  ]

  isInclude(username: string, passwd: string): any {
    for (let user of this.usersList) {
      if (user.mail == username && user.pass == passwd) {
        return true
      }
    }
    return false
  }

  login(userName: string, password: string): Observable<any> {
    this.isUserLoggedIn = this.isInclude(userName, password)
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
    return of(this.isUserLoggedIn).pipe(delay(100));
  }

  logout(): void {
    this.isUserLoggedIn = false
    localStorage.removeItem('isUserLoggedIn');
  }

  constructor() { }
}
