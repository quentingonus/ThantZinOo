import { Component, OnInit } from '@angular/core';
import { Observable, of, range, from, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Reactive programming concept';
  numbers: number[] = [];
  val1: number = 0;
  filteredNumbers: number[] = [];
  val2: number = 0;
  processedNumbers: number[] = [];
  val3: number = 0;
  apiMessage: string = "";
  counter: number = 0;
  alertMsg: string = "";

  constructor() { }

  ngOnInit(): void {
    const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const observer = {
      next: (num: number) => { this.numbers.push(num); this.val1 += num },
      error: (err: any) => console.log(err),
      complete: () => console.log("Observation completed")
    };
    const countBtn1 = document.getElementById("counter1") as HTMLElement;
    const countBtn2 = document.getElementById("counter2") as HTMLElement;

    const showAlert = (message: string) => {
      const alertBox = document.getElementById("alertBox") as HTMLElement;
      this.alertMsg = message;
      alertBox.classList.remove("hidden");
      setTimeout(() => { alertBox.classList.add("hidden") }, 1500)
    }

    numbers$.subscribe(observer);
    const filterFn = filter((num: number) => num > 5);
    const filteredNumbers = filterFn(numbers$);
    filteredNumbers.subscribe((num: number) => { this.filteredNumbers.push(num); this.val2 += num });
    const mapFn = map((num: number) => num + num);
    const processedNumbers$ = numbers$.pipe(filterFn, mapFn);
    processedNumbers$.subscribe((num: number) => { this.processedNumbers.push(num); this.val3 += num });
    const api$ = ajax({
      url: 'https://httpbin.org/delay/1',
      method: 'POST',
      headers: { 'Content-Type': 'application/text' },
      body: "Hello"
    });
    api$.subscribe((res: any) => {
      this.apiMessage = res.response.data;
    });
    const clickEvent1$ = fromEvent(countBtn1, 'click');
    clickEvent1$.subscribe(() => this.counter++);
    const clickEvent2$ = fromEvent(countBtn2, 'click');
    clickEvent2$.subscribe(() => this.counter > 0 ? this.counter-- : showAlert("Counter Value is 0 already!"));
  }

}
