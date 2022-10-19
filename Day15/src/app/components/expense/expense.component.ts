import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  logout() {
    this.snackBar.open('Logout success. ', 'Close', {
      duration: 1500
    })
    this.router.navigate(['logout'])
  }

  ngOnInit(): void { }

}
