import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent implements OnInit {

  formData: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    dob: new FormControl("", [Validators.required]),
    grade: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
  })
  matcher = new MyErrorStateMatcher();
  constructor(public dialogRef: MatDialogRef<AddStudentDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.dialogRef.close();
  }
  save(): void {
    for (let item in this.formData.value) {
      if (!this.formData.value[item]) {
        return
      }
    }
    this.dialogRef.close({ id: this.data.id, ...this.formData.value })
  }

}
