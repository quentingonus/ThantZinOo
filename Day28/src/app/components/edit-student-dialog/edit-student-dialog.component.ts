import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.scss']
})
export class EditStudentDialogComponent implements OnInit {

  formData!: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditStudentDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl(this.data.student.name),
      phone: new FormControl(this.data.student.phone),
      dob: new FormControl(this.data.student.dob),
      grade: new FormControl(this.data.student.grade),
      address: new FormControl(this.data.student.address),
    })
  }
  cancel(): void {
    this.dialogRef.close();
  }
  save(): void {
    this.dialogRef.close({ id: this.data.student.id, profile: this.data.student.profile, ...this.formData.value })
  }

}
