import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.scss']
})
export class ExpenseEntryComponent implements OnInit {
  title: string = "Expense Entry";
  expenseEntry: ExpenseEntry = {
    id: 1,
    item: "Pizza",
    amount: 21,
    category: "Food",
    location: "Zomato",
    spendOn: new Date(), createdOn: new Date(),
  };
  constructor() { }

  ngOnInit(): void {
  }

}