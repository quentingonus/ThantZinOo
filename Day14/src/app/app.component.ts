import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private snackBar: MatSnackBar) { }
  title = 'Day14';

  signupLoading: boolean = false;
  signupLoading2: boolean = false;

  name = new FormControl('', [Validators.required]);
  mail = new FormControl('', [Validators.required, Validators.email]);
  passwd = new FormControl("", [Validators.required, Validators.minLength(6)])
  passwd2 = new FormControl("", [
    Validators.required,
    Validators.minLength(6),
    (control: AbstractControl): ValidationErrors | null => {
      return this.passwd.value == control.value ? null : { notsame: true };
    }
  ])
  agreeBox = new FormControl(true, [Validators.requiredTrue])

  name2: string = "";
  mail2: string = "";
  passwd3: string = "";
  passwd4: string = "";
  agreeBox2: boolean = true;

  matcher = new MyErrorStateMatcher();

  signupBtn = () => {
    if (this.name.errors || this.mail.errors || this.passwd.errors || this.passwd2.errors || this.agreeBox.errors) {
      return
    }
    this.signupLoading = true;
    setTimeout(() => {
      this.signupLoading = false
      this.snackBar.open('Registeration success. ', 'Close', {
        duration: 1500
      })
    }, 2500)
  }

  signupBtn2 = (form: any) => {
    form = form.controls
    if (form.name3.errors || form.mail3.errors || form.passwd5.errors || form.passwd6.errors || form.agreeBox3.errors) {
      return
    }
    this.signupLoading2 = true;
    setTimeout(() => {
      this.signupLoading2 = false
      this.snackBar.open('Registeration success. ', 'Close', {
        duration: 1500
      })
    }, 2500)
  }


}
