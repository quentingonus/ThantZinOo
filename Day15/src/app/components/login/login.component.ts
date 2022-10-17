import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private authService: AuthService, private router: Router) { }

  signupLoading: boolean = false;

  mail: string = "";
  passwd: string = "";
  agreeBox: boolean = false;

  formData: FormGroup = new FormGroup({
    mail: new FormControl(""),
    passwd: new FormControl(""),
    agreeBox: new FormControl(""),
  })

  signupBtn = (loginForm: any) => {
    this.mail = loginForm.mail;
    this.passwd = loginForm.passwd;
    this.signupLoading = true;
    setTimeout(() => {
      this.signupLoading = false
      this.authService.login(this.mail, this.passwd)
        .subscribe((data) => {
          if (data) {
            this.snackBar.open('Login success. ', 'Close', {
              duration: 1500
            })
            this.router.navigate(['admin'])
          } else {
            this.snackBar.open('Mail or Password is incorrect. ', 'Close', {
              duration: 1500
            })
          }
        });
    }, 1500)
  }

  cheat() {
    this.router.navigate(['admin'])
  }

  ngOnInit(): void {
  }

}
