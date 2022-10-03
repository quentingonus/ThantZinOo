import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day6';
  presentDate = new Date();

  timeChange = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new
      Date().toString()), 1000);
  });
  price: number = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  decimalNum3: number = 0.8178;
  jsonData = { id: 'one', name: { username: 'user1' } }
  digits: number = 12345;
}
