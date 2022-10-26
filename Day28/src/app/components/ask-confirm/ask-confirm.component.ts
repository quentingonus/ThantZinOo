import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ask-confirm',
  templateUrl: './ask-confirm.component.html',
  styleUrls: ['./ask-confirm.component.scss']
})
export class AskConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AskConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(true)
  }

}
