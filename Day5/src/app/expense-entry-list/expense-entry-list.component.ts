import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';

@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.scss']
})
export class ExpenseEntryListComponent implements OnInit {

  title: string = "";
  expenseEntries: ExpenseEntry[] = [];

  getExpenseEntries(): ExpenseEntry[] {
    let mockExpenseEntries: ExpenseEntry[] = [
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "Mcdonald",
        spendOn: new Date(),
        createdOn: new Date()
      },
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "KFC",
        spendOn: new Date(),
        createdOn: new Date()
      },
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "Mcdonald",
        spendOn: new Date(),
        createdOn: new Date()
      },
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "KFC",
        spendOn: new Date(),
        createdOn: new Date()
      },
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "KFC",
        spendOn: new Date(),
        createdOn: new Date()
      },
    ];
    return mockExpenseEntries;
  }

  constructor() { }
  ngOnInit() {
    this.title = "Expense Entry List";
    this.expenseEntries = this.getExpenseEntries();
  }

}
