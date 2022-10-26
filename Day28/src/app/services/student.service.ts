import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList: Student[] = []

  constructor() { }

  getList() {
    this.studentList = [
      {
        id: 1,
        profile: 'https://api.lorem.space/image/face?w=200&h=200&t=1',
        name: "Aung Aung",
        phone: "09123456789",
        dob: "2000-01-01",
        grade: "1st Year",
        address: "Shan"
      }, {
        id: 2,
        profile: 'https://api.lorem.space/image/face?w=200&h=200&t=2',
        name: "Aye Aye",
        phone: "091231295619",
        dob: "1995-01-02",
        grade: "2st Year",
        address: "Mandalay"
      }, {
        id: 3,
        profile: 'https://api.lorem.space/image/face?w=200&h=200&t=3',
        name: "Mg Mg",
        phone: "09116951489",
        dob: "2001-10-10",
        grade: "Grade 10",
        address: "Yangon"
      },
    ]
    return this.studentList
  }
  addList(student: Student) {
    this.studentList.push(student)
    return this.studentList
  }
  updateList(studentList: any) {
    this.studentList = studentList
    return this.studentList
  }


}
