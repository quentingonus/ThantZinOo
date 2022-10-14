import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';

@Directive({
  selector: '[appLengthvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: LengthvalidatorDirective,
      multi: true
    }
  ]
})
export class LengthvalidatorDirective implements Validator {

  validator: ValidatorFn;
  constructor() {
    this.validator = this.lengthValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  lengthValidator(): ValidatorFn | any {
    return (control: FormControl) => {
      if (control.value != null && control.value !== '') {
        return control.value.length > 6 ? null : { minlength: true }
      } else {
        return null;
      }
    };
  }
}