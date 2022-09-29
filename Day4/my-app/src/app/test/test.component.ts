import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  appName: string = "My first app in Angular";
  userName: string = "Peter";
  columnSpan: number = 2;
  myClasses: string = "red";
  searchPhone: string = "";
  phones: { name: string, price: string }[] = [
    { name: "Apple", price: "1499$" },
    { name: "Samsung", price: "1099$" },
    { name: "Huawei", price: "899$" },
    { name: "HTC", price: "799$" },
    { name: "Xaomi", price: "699$" },
    { name: "Sony", price: "899$" },
    { name: "LG", price: "799$" },
    { name: "Blackberry", price: "699$" },
    { name: "Nokia", price: "899$" },
    { name: "Microsoft", price: "999$" },
    { name: "Nothing", price: "599$" },
    { name: "Vivo", price: "499$" },
    { name: "Oppo", price: "799$" }
  ]
  searchedPhones() {
    return this.phones.filter(item => item.name.toUpperCase().includes(this.searchPhone.toUpperCase()))
  }

  showData($event: any) {
    console.log("button is clicked!"); if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
