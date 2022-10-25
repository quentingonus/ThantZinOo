import { Component, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { EditStudentDialogComponent } from './components/edit-student-dialog/edit-student-dialog.component';
import { AddStudentDialogComponent } from './components/add-student-dialog/add-student-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day28';
  studentList!: any
  dataSource!: any
  displayedColumns = ["id", "name", "phone", "dob", "grade", "address", "actions"]

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private student: StudentService, public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    if (localStorage.getItem('studentlist_25_10_2022')) {
      this.studentList = JSON.parse(localStorage.getItem("studentlist_25_10_2022") ? localStorage.getItem("studentlist_25_10_2022")! : "[]")
      if (!this.studentList.length) {
        this.studentList = this.student.getList()
      }
    } else {
      this.studentList = this.student.getList()
    }
    this.updateDataSource()
  }

  updateDataSource() {
    this.dataSource = new MatTableDataSource(this.studentList)
    localStorage.setItem("studentlist_25_10_2022", JSON.stringify(this.studentList))
  }

  add(): void {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      data: { id: this.studentList.length > 0 ? this.studentList[this.studentList.length - 1].id + 1 : 1 }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentList = this.student.setList(result)
        this.updateDataSource()
      }
    });
  }

  editStudent(event: any): void {
    const dialogRef = this.dialog.open(EditStudentDialogComponent, {
      data: { student: event }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentList[event.id - 1] = result
        this.studentList = this.student.updateList(this.studentList)
        this.updateDataSource()
      }
    });
  }

  deleteStudent(event: any): void {
    let isExist = this.studentList.indexOf(event)
    if (isExist > -1) {
      this.studentList.splice(isExist, 1)
    }
    this.studentList = this.student.updateList(this.studentList)
    this.updateDataSource()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  downloadInCSV(data: Array<any>) {
    if (data.length == 0) {
      return;
    }

    let propertyNames = Object.keys(data[0]);
    let rowWithPropertyNames = propertyNames.join(',') + '\n';

    let csvContent = rowWithPropertyNames;

    let rows: string[] = [];

    data.forEach((item) => {
      let values: string[] = [];

      propertyNames.forEach((key) => {
        let val: any = item[key];

        if (val !== undefined && val !== null) {
          val = new String(val);
        } else {
          val = '';
        }
        values.push(val);
      });
      rows.push(values.join(','));
    });
    csvContent += rows.join('\n');

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'studentsList.csv';
    hiddenElement.click();
    return
  }
}
