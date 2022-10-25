import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList: Student[] = []

  constructor() {
  }

  getList() {
    this.studentList = [
      {
        id: 1,
        name: "Aung Aung",
        phone: "09123456789",
        dob: "1-2-2000",
        grade: "1st Year",
        address: "Shan"
      }, {
        id: 2,
        name: "Aye Aye",
        phone: "091231295619",
        dob: "1-2-1995",
        grade: "2st Year",
        address: "Mandalay"
      }, {
        id: 3,
        name: "Mg Mg",
        phone: "09116951489",
        dob: "1-2-2001",
        grade: "Grade 10",
        address: "Yangon"
      },
    ]
    return this.studentList
  }
  setList(student: Student) {
    this.studentList.push(student)
    return this.studentList
  }
  updateList(studentList: any) {
    this.studentList = studentList
    return this.studentList
  }


}
