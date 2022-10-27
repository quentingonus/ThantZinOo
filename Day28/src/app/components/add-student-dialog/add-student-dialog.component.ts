import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

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
    profile: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    dob: new FormControl("", [Validators.required]),
    grade: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
  })
  matcher = new MyErrorStateMatcher();
  isEditable = true;
  isUploading = false;
  uploadedProfile = null;

  constructor(public dialogRef: MatDialogRef<AddStudentDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.dialogRef.close();
  }
  checkSave() {
    for (let item in this.formData.value) {
      if (!this.formData.value[item]) {
        return
      }
    }
    this.isEditable = false
  }
  save(): void {
    for (let item in this.formData.value) {
      if (!this.formData.value[item]) {
        return
      }
    }

    this.isUploading = true

    var formdata = new FormData();
    formdata.append("media", this.formData.value.profile, this.formData.value.profile.name);
    formdata.append("key", "000023c40d17f9bcfaa07eac92a56ccc");

    var requestOptions: RequestInit = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://thumbsnap.com/api/upload", requestOptions)
      .then(response => response.text())
      .then(result => {
        let res = JSON.parse(result)
        this.formData.value.profile = res.data.thumb;
        this.dialogRef.close({ id: this.data.id, ...this.formData.value })
      })
      .catch(error => console.log('error', error));

  }

}
